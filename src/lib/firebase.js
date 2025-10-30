import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { firebaseConfig } from '../firebaseConfig' // We'll skip this

// --- We are commenting out the real Firebase app ---
// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)
// export const storage = getStorage(app)
// export const ts = serverTimestamp

// --- And exporting mock (fake) values instead ---
export const db = null;
export const storage = null;
export const ts = () => new Date(); // Just return a plain date for now

// NOTE: This file is now mocked to allow frontend-only development.
// The app will no longer try to connect to Firebase.