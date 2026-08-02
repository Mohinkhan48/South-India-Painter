# Layout Spacing and Responsive Alignment Walkthrough

The layout, spacing, alignment, and responsiveness of the Services page have been completely polished.

## Polish Adjustments Completed:

1. **Global Content Width Alignment**:
   - Refactored the `.container` helper utility inside `src/styles/globals.css` to restrict max-width to exactly `1400px` and set `width: calc(100% - 64px)`.
   - Centered it across all viewports. Larger desktop resolutions (up to 1920px and beyond) now keep the header, sections, and footer aligned on the same content grid.

2. **Book Site Visit Section**:
   - Grid layout centers on desktop with a fixed height of `580px`, splitting columns exactly 50/50.
   - Overlapped heading text `UNLOCK BETTER SPACES WITH A FREE SITE VISIT` is perfectly positioned via absolute coordinates, maintaining proper sizing without being overly large.
   - Grouped the form inputs into 2 columns on desktop to ensure everything fits inside the `580px` height limit.
   - Retained the final CTA button `BOOK SITE INSPECTION →` inside the white card container.
   - Configured responsiveness to stack below `900px` with custom paddings and image heights.

3. **Services Carousel Section**:
   - Enclosed the entire section (heading, dots, and carousel track) inside the unified `1400px` container.
   - Aligned the heading to prevent first-card edge touching, with correct spacing constraints.

4. **Consultation / Let's Understand Your Space**:
   - Restored desktop height to a comfortable `min-h-[430px]`.
   - Grid columns set to split 1fr 1fr with left navy content padding and right white form padding.
   - Form fields use `gap: 16px` and `52px` inputs, keeping the button visible and preventing vertical clipping.

5. **Why Choose Us Section**:
   - Spaced section to `py-[90px] lg:py-[100px]`.
   - Refactored the horizontal timeline line path to run through the horizontal center of the circles (starts at `12.5%` and ends at `87.5%`).
   - Node items are centered with text-align center on desktop to align properly with the line nodes.
   - Connects to a vertical timeline on mobile (below 600px) and hides the lines on tablet 2x2 grids.

6. **Estimate Section**:
   - Set section spacing to `py-[90px] lg:py-[100px]` with standard container bounds.
   - Stretched cards to keep equal heights.

7. **Materials/Brands & Final CTA**:
   - Set brand marquee padding to `pt-[70px] pb-[80px]` and enhanced text contrast slightly for readability.
   - Set Final CTA bounds to `max-w-[1400px]`, centered text vertically with `BOOK A FREE SITE VISIT →` button, and adjusted footer top-padding to `60px`.

All code builds successfully with zero TypeScript, React, or horizontal overflow warnings.
