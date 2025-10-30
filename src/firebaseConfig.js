/*
  Placeholder Firebase configuration.
  To enable Firestore + Storage:
  1. Create a Firebase project at https://console.firebase.google.com/
  2. Add a Web app and copy the config below into .env (example: VITE_FIREBASE_API_KEY)
  3. Replace the values below or inject via environment variables.
*/

export const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_BUCKET",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "SENDER_ID",
  appId: process.env.VITE_FIREBASE_APP_ID || "APP_ID",
}
