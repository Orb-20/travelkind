# TravelKind — Tourist Awareness (React + Vite + Tailwind)

A starter React project implementing the TravelKind site (Home, Tips, Pledge, Report). Built with:
- Vite + React
- Tailwind CSS
- Firebase (Firestore + Storage) integration (placeholder config included)

## Features included
- Responsive layout and accessible components
- Pledge form that writes to Firestore
- Report form that uploads photos to Storage (if configured)
- Routing for all pages
- Tailwind utility classes and color palette matching the brief
- Accessibility considerations (focus outlines, labels, ARIA-ready)
- Ready for i18n (structure only)

## Setup (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Provide Firebase config:
   - Create a `.env` file with values like:
     ```
     VITE_FIREBASE_API_KEY=...
     VITE_FIREBASE_AUTH_DOMAIN=...
     VITE_FIREBASE_PROJECT_ID=...
     VITE_FIREBASE_STORAGE_BUCKET=...
     VITE_FIREBASE_MESSAGING_SENDER_ID=...
     VITE_FIREBASE_APP_ID=...
     ```
   - Or replace `src/firebaseConfig.js` directly with your config.
3. Run dev server:
   ```bash
   npm run dev
   ```

## Notes
- This project is a functional prototype. For production:
  - Secure Firebase rules (auth or server-side functions).
  - Add rate-limiting and moderation workflows.
  - Add i18n, real translations, and richer map integration (e.g., Leaflet or Mapbox).
  - Add unit tests and E2E tests.

