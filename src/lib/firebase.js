import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from '../firebaseConfig'

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const ts = serverTimestamp

// NOTE: This file is ready, but you'll need to provide real firebaseConfig values.
// The app uses Firestore for pledges & reports, and Storage for uploaded photos.
