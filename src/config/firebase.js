import admin from 'firebase-admin';
import { firebaseStorage, googleCredentials } from './constants.js'

import serviceAccount from '../../mongo-backend-avanzado-firebase-adminsdk-fbsvc-978c748d2b.json' with { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: firebaseStorage,
})

export const bucket = admin.storage().bucket();