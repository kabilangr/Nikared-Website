# Design System Specification: The Kinetic Protocol

## 1. Overview & Creative North Star
**Creative North Star: "The Sovereign Interface"**
This design system moves beyond the tired "neon-on-black" tropes of 80s retro-futurism. Instead, it embodies a **High-End Corporate Cyberpunk** aesthetic—the visual language of a multi-trillion dollar AI conglomerate. It is cold, precise, and authoritative. 

The system breaks the "standard template" look through **Rigid Technicality**. We utilize a hyper-disciplined grid, intentional asymmetry (e.g., heavy left-aligned weighting with vast negative space on the right), and "Data-Density" layers. The goal is to make the user feel like they are interacting with a high-bandwidth hardware terminal, where every pixel is optimized for performance and every element is an intentional piece of engineering.

---

## 2. Colors: Tonal Architecture
The palette is rooted in the absence of light, using deep charcoal and obsidian to create a sense of infinite depth.

### The "No-Line" Rule
Traditional 1px solid borders for sectioning are strictly prohibited. Sectioning must be achieved through **Background Shifts**. Use `surface-container-low` for primary content areas sitting on a `surface` background. Transitions should feel like moving between pressurized chambers, not crossing a line.

### Surface Hierarchy & Nesting
Depth is built through "Tonal Stacking."
*   **Base Level:** `surface` (#0e0e0f) for the main canvas.
*   **The Sub-Grid:** `surface-container-low` (#131314) for secondary sidebars or background groupings.
*   **The Active Module:** `surface-container-high` (#201f21) for interactive cards or foreground elements.
*   **The Focus Tier:** `surface-container-highest` (#262627) for modals and dropdowns.

### The "Glass & Gradient" Rule
To prevent the UI from feeling "flat" or "cheap," apply **Glassmorphism** to floating elements. Use `surface-variant` with a 60% opacity and a `20px` backdrop-blur. 
*   **Signature Textures:** For primary CTAs, use a linear gradient: `primary` (#81ecff) to `primary-container` (#00e3fd) at a 135-degree angle. This mimics the "glow" of a high-energy plasma conduit.

---

## 3. Typography: Technical Precision
We use typography to convey "Machine Intelligence."

*   **The Display Language:** `Space Grotesk` is our technical backbone. Use `display-lg` for hero headlines. The sharp terminals and geometric apertures of the font should feel like they were etched by a laser.
*   **The Body Language:** `Inter` provides the necessary legibility for high-density data. 
*   **The Brand Identity Hierarchy:** 
    *   **Headlines:** Always `Space Grotesk`, sentence case, tracking -2%.
    *   **Labels:** Use `label-md` in `Space Grotesk` uppercase with +10% letter spacing. This creates the "Spec Sheet" aesthetic required for the corporate-tech feel.
    *   **Body:** `Inter` at `body-md`. Avoid pure white (`#ffffff`) for long-form text; use `on-surface-variant` (#adaaab) to reduce eye strain in dark mode.

---

## 4. Elevation & Depth: Tonal Layering
In this system, light is an energy source, not just a shadow.

*   **Ambient Shadows:** We do not use "dark" shadows. When an element floats, use an **Electric Glow Shadow**. Apply a `primary` color shadow with a 32px blur at only 8% opacity. This mimics the light spill of a neon screen.
*   **The "Ghost Border" Fallback:** Where containment is functionally required (e.g., input fields), use a `Ghost Border`. This is the `outline-variant` (#484849) at **15% opacity**. It should be barely visible, revealing itself only upon close inspection.
*   **The "Tech Detail" Edge:** For cards, instead of a full border, use a 2px top-border in `primary` or `secondary` to signify "Active Power."

---

## 5. Components: Modular Hardware

### Buttons
*   **Primary:** `DEFAULT` 0px radius. Background: `primary` gradient. Text: `on-primary`. Hover state: Add a 1px `primary` outer glow.
*   **Secondary:** Ghost style. `0px` radius. `Ghost Border` (outline-variant 20%). Text: `primary`.
*   **Tertiary:** Text-only, `Space Grotesk` uppercase, `label-md`.

### Input Fields
*   **Structure:** No background. Bottom-border only using `outline` (#767576). 
*   **State:** On focus, the bottom border transitions to `primary` with a subtle `primary_dim` glow underneath. 
*   **Helper Text:** Always use `label-sm` in `secondary` (#6e9bff) to look like system metadata.

### Cards & Lists
*   **The Rule of Zero Dividers:** Horizontal lines are forbidden. Use `spacing-10` (2.25rem) to separate list items or subtle background shifts (`surface-container-low` vs `surface-container-high`).
*   **Component Detail:** Add a "corner-accent"—a tiny 4px L-shape in the top right corner of cards using the `tertiary` (#faf9f9) silver token to mimic hardware mounting brackets.

### Tactical "Status" Chips
*   Use `error_container` for critical alerts with `on_error_container` text. 
*   The shape must be a hard rectangle (`0px` radius).

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace the `0px` roundedness scale. Everything is a sharp edge. 
*   **Do** use asymmetrical layouts. A 1/3 vs 2/3 grid split feels more like a "terminal" than a 50/50 split.
*   **Do** use the `secondary` (#6e9bff) blue for interactive "Data Points" or links.
*   **Do** use high-contrast imagery: monochrome hardware photos with `primary` color light-leaks.

### Don't:
*   **Don't** use standard drop shadows. If it doesn't look like an LED glow, don't use it.
*   **Don't** use rounded corners. Even 2px is too "soft" for this corporate environment.
*   **Don't** use "Auto-Layout" defaults. Use the Spacing Scale strictly; gaps should be large (`spacing-12`+) or non-existent (`spacing-px`).
*   **Don't** use centered text. Technical documents and terminals are always left or right aligned for scanning efficiency.