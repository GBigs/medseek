# The Design System: Clinical Precision & Neural Fluidity

## 1. Overview & Creative North Star: "The Living Lab"
This design system rejects the cluttered, boxy aesthetic of traditional medical software in favor of a **"Living Lab"** philosophy. In high-pressure medical contexts, cognitive load is the enemy. Our North Star is a high-contrast, editorial experience that feels as precise as a scalpel but as intuitive as a natural conversation.

We move beyond the "Generic SaaS" look by utilizing **intentional asymmetry**, **exaggerated white space**, and **tonal depth**. The UI does not use borders to define space; it uses light and physical layering. This creates a "slightly futuristic" atmosphere—clean, clinical, and authoritative—without feeling cold or robotic.

---

## 2. Colors: Tonal Architecture
The palette is rooted in a clinical white-site experience, punctuated by a deep, sophisticated dark hero and a high-energy "Neural Gradient."

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or grouping. Boundaries must be defined through background color shifts.
*   Use `surface` (#f5f7f9) for the primary canvas.
*   Use `surface-container-low` (#eef1f3) to define distinct content zones.
*   Use `surface-container-highest` (#d9dde0) only for the most critical utility bars.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets.
1.  **Base Layer:** `surface`
2.  **Sectioning:** `surface-container-low`
3.  **Interactive Cards:** `surface-container-lowest` (#ffffff) sitting atop the section layer to create a natural "pop" without shadows.

### The Signature Neural Gradient
The gradient **#2BFFBD to #96FF84** is our primary signifier of AI activity and "health." 
*   **Hero Section:** Use `inverse_surface` (#0b0f10) as the background. Text should be `inverse_on_surface` or `on_primary_fixed`.
*   **Interactions:** Apply the gradient to primary buttons, active states, and progress indicators. This high-contrast vibrance against clinical neutrals creates a "premium" signature.

---

## 3. Typography: Editorial Authority
We use **Bricolage Grotesque** exclusively. Its unique blend of technical structure and organic curves perfectly mirrors the "Medical AI" intersection.

*   **Display (3.5rem - 2.25rem):** Use for hero statements and key data points. Use `on_background` (#2c2f31) with `-0.02em` letter spacing to feel "tight" and authoritative.
*   **Headlines (2rem - 1.5rem):** High-contrast anchors for page sections. These should have generous `top-margin` (Scale 16) to allow the eye to rest.
*   **Body (1rem - 0.75rem):** Set in `on_surface_variant` (#595c5e) for secondary reading to ensure the headlines remain the primary focal point.
*   **Labels (0.75rem - 0.6875rem):** All-caps for metadata, using `secondary` (#4b605b) to denote technical utility.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "software." We use **Ambient Depth**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` background creates a soft lift.
*   **Ambient Shadows:** For floating modals, use a shadow with a 40px blur and 4% opacity, tinted with `surface_tint` (#006947). It should feel like a soft glow, not a dark drop.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#abadaf) at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** For the navigation bar and floating AI panels, use `surface` at 80% opacity with a `20px` backdrop blur. This allows the medical data to "ghost" behind the UI, maintaining context.

---

## 5. Components: The Clinical Primitives

### Buttons
*   **Primary:** Neural Gradient (#2BFFBD to #96FF84) with `on_primary_fixed` (#00412a) text. Roundedness: `md` (0.375rem).
*   **Secondary:** `surface-container-highest` background. No border.
*   **Tertiary:** Ghost style. `primary` text with no background.

### Input Fields
*   **State:** Use `surface-container-lowest` as the field background. 
*   **Focus:** Do not change the border color; instead, apply a 2px outer glow using the Neural Gradient at 30% opacity.
*   **Labels:** Use `title-sm` (Bricolage, 1rem) for input labels to maintain high readability in high-pressure contexts.

### Medical Data Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines between list items. Use Spacing Scale `4` (1.4rem) as a vertical gap or alternating `surface` and `surface-container-low` backgrounds.
*   **Diagnostic Chips:** Use `secondary_container` (#d0e7e1) for status tags. Use `tertiary_fixed` (#8ff87e) for "Healthy/Normal" results.

### Diagnostic Visualizer (Specialty Component)
A container using `inverse_surface` (#0b0f10) with "Neural Gradient" accents. Use this for AI analysis results or X-ray/Scan overlays to create a "futuristic darkroom" feel within the light-mode app.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. For example, a wider left margin for headlines to create an editorial, "non-SaaS" feel.
*   **Do** use the Spacing Scale `20` (7rem) for section breaks. Let the layout breathe.
*   **Do** use `Bricolage Grotesque` in its "Medium" weight for body text to ensure legibility on medical monitors.

### Don’t:
*   **Don’t** use pure black (#000000). Use `inverse_surface` (#0b0f10) for deep tones to keep it sophisticated.
*   **Don’t** use standard blue for "links." Use the `primary` green (#006947) or the Neural Gradient.
*   **Don’t** use "Card Shadows" on every element. Rely on the "No-Line" background shifts first.
*   **Don’t** center-align long-form medical data. Always left-align for rapid scanning.