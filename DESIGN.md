# Lumina Dental Studio — Design System

## Design Direction

**Crisp, Clean & Tech-Forward** with an airy premium-wellness character.

Lumina should feel like a premium dental studio rather than a conventional medical website: calm, precise, human, and quietly sophisticated.

## Experience Principles

- Calm before conversion.
- Clarity over complexity.
- Human expertise builds trust.
- Hospitality over clinical sterility.
- Motion should support hierarchy and feedback, not compete with content.

## Color Tokens

| Token | Value | Use |
|---|---|---|
| White | `#FFFFFF` | Primary backgrounds, cards |
| Soft Gray | `#F8F9FA` | Section separation, subtle surfaces |
| Charcoal | `#2B2D42` | Primary text and headings |
| Mint | `#4CA794` | Primary brand accent and conversion actions |
| Mint Dark | `#388B7A` | Hover / emphasis states |
| Mint Light | `#EAF7F3` | Soft accent surfaces |
| Border | `#E8EBEE` | Dividers and component borders |

## Typography

### Plus Jakarta Sans

Used for headings, navigation emphasis, buttons, and prominent UI labels.

### Inter

Used for body copy, supporting text, metadata, and utility content.

## Layout

The interface uses a spacious responsive container with CSS Grid and Flexbox. Large desktop layouts should feel editorial and open rather than densely card-based.

Target review widths:

- 375px mobile
- 768px tablet
- 1024px small desktop/tablet landscape
- 1440px desktop

## Shape Language

- Buttons: rounded / pill-like where appropriate.
- Small components: restrained 14–18px radius.
- Large cards and imagery: approximately 20–24px radius.
- Sections should not all be enclosed in cards; open composition is preferred.

## Component Principles

### Navigation
Minimal links with a prominent appointment action. The logo returns to the top.

### Buttons
Primary mint CTA for appointment conversion. Secondary actions should remain visually subordinate.

### Service Cards
Clear category, concise description, supporting imagery, and restrained hover feedback.

### Doctor Cards
Portrait-led presentation with name, clinical role, specialty, and concise supporting information.

### Testimonials
Calm, user-controlled carousel behavior rather than continuous automatic movement.

### FAQ
Accessible accordion with clear expanded/collapsed states and restrained transition.

### Booking UI
A front-end-only appointment prototype with clear steps, accessible controls, review state, and demo confirmation.

## Motion

Motion should be quiet, smooth, and purposeful.

- Fast feedback: roughly 150–250ms.
- Medium UI transitions: roughly 250–400ms.
- Large entrance transitions: roughly 500–800ms.
- Prefer opacity and transform for lightweight animation.
- Avoid excessive blur, endless movement, and decorative animation that competes with content.
- Respect `prefers-reduced-motion`.

## Accessibility

The final implementation should include:

- Semantic HTML and logical heading hierarchy.
- Visible `:focus-visible` states.
- Keyboard-accessible navigation and interactive controls.
- Correct ARIA state management where needed.
- Focus management for the appointment modal/sheet.
- Accessible form labels and error/success states.
- Sufficient color contrast.
- Touch-friendly controls on mobile.
- Reduced-motion behavior.
- Meaningful image alternative text where imagery conveys information.

## Content & Brand Authenticity

Lumina Dental Studio is fictional. UI copy must not imply that fictional people, clinic details, partnerships, contact information, testimonials, or claims are real. Where third-party technologies or brands are referenced, wording should avoid implying an official partnership unless explicitly intended as part of the concept.

## Design QA Checklist

- [ ] Visual hierarchy is clear within each section.
- [ ] No unnecessary repetitive card patterns.
- [ ] Primary CTA remains discoverable without becoming intrusive.
- [ ] Typography scales cleanly across breakpoints.
- [ ] Images crop intentionally at mobile widths.
- [ ] Motion feels calm and purposeful.
- [ ] Interactive states are visible and consistent.
- [ ] Keyboard and reduced-motion behavior are functional.
