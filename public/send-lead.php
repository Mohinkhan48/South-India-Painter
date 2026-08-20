<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Get the POST data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if (!$input) {
    $input = $_POST;
}

// 1. Honeypot protection
if (!empty($input['website_url'])) {
    echo json_encode(["status" => "success", "message" => "Lead processed"]);
    exit;
}

// 2. Extract and sanitize fields
$name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
$email = isset($input['email']) ? strip_tags(trim($input['email'])) : '';
$city = isset($input['city']) ? strip_tags(trim($input['city'])) : '';
$propertyType = isset($input['propertyType']) ? strip_tags(trim($input['propertyType'])) : '';
$service = isset($input['service']) ? strip_tags(trim($input['service'])) : '';
$services = isset($input['services']) ? $input['services'] : '';
$sourcePage = isset($input['sourcePage']) ? strip_tags(trim($input['sourcePage'])) : 'Unknown';

// 3. Server-side Validation
if (empty($name)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name is required"]);
    exit;
}

if (empty($phone)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Phone number is required"]);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    exit;
}

// Format selected services if array or string
$servicesStr = '';
if (is_array($services)) {
    $servicesStr = implode(', ', array_map('strip_tags', $services));
} else {
    $servicesStr = strip_tags(trim($services));
}

$to = "care@southindiapainter.com";
$subject = "New Website Lead - South India Painters";

// Construct the email body
$body = "NEW WEBSITE LEAD\n\n";
$body .= "Customer Details\n";
$body .= "----------------\n";
$body .= "Name: " . $name . "\n";
$body .= "Phone: " . $phone . "  (CALL THIS NUMBER)\n";
$body .= "Email: " . ($email ? $email : "Not Provided") . "\n";
$body .= "City: " . ($city ? $city : "Not Provided") . "\n\n";

$body .= "Project Details\n";
$body .= "---------------\n";
if (!empty($propertyType)) {
    $body .= "Property Type: " . $propertyType . "\n";
}
if (!empty($service)) {
    $body .= "Service Required: " . $service . "\n";
}
if (!empty($servicesStr)) {
    $body .= "Selected Services: " . $servicesStr . "\n";
}
$body .= "\n";
$body .= "Source Form: " . $sourcePage . "\n";
$body .= "Submitted At: " . date("Y-m-d H:i:s") . "\n";
$body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: South India Painters Website <noreply@southindiapainter.com>\r\n";
$headers .= "Reply-To: " . ($email ? $email : "noreply@southindiapainter.com") . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Lead sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email on server"]);
}
?>
