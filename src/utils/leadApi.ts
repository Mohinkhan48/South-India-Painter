export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  propertyType?: string;
  service?: string;
  services?: string[];
  sourcePage: string;
  website_url?: string; // Honeypot field
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/send-lead.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errMsg = 'Something went wrong. Please try again or call us directly.';
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errMsg = errorData.message;
        }
      } catch (e) {
        // Ignore JSON parsing failure for HTTP error status
      }
      return { success: false, message: errMsg };
    }

    const data = await response.json();
    if (data.status === 'success') {
      return { 
        success: true, 
        message: 'Thank you! Your request has been received. Our team will contact you shortly.' 
      };
    } else {
      return { 
        success: false, 
        message: data.message || 'Something went wrong. Please try again or call us directly.' 
      };
    }
  } catch (error) {
    console.error('Lead submission error:', error);
    return { 
      success: false, 
      message: 'Something went wrong. Please try again or call us directly.' 
    };
  }
}
