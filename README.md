# Skip Selector Redesign

This project is a front-end redesign of the "Choose your skip size", as part of a coding challenge. The goal was to visually transform the page, while maintaining all the original functionality, improving the UX/UI, and ensuring full responsiveness across mobile and desktop devices.

## Approach

### Redesigned the UI

- Completely restructured the layout using ReactJS and Tailwind CSS for a clean and modern look.

- Used cards to clearly separate and highlight each skip option.

-  Improved spacing, color contrast, and typography for better readability.

- Ensured selection state is clearly visible with a select button toggle.

### Responsive Design

- Used Tailwind’s responsive utility classes to ensure proper rendering on:

    - Mobile (stacked layout).

    - Desktop (flex layout for cards, centered content).

### Functionality Kept Intact

- Preserved:

    - Data structure and logic.

    - Select action with visual feedback.

    - Pricing calculation using price_before_vat and vat.

    - Skips are dynamically populated from the provided API: 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'

## Running The Code
- git clone https://github.com/Nellybii/RemWasteTest
- npm install
- npm run dev 

