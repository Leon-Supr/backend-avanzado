import dotenv from 'dotenv';

dotenv.config();

export const jwtSecret = process.env.JWT_SECRET
export const mongoDomain = process.env.MONGO_DOMAIN
export const mongoUser = process.env.MONGO_USER
export const mongoPWD = process.env.MONGO_PWD
export const mongoDb = process.env.MONGO_DATABASE
export const mongoUri = process.env.MONGO_URI

// Firebase
export const firebaseStorage = process.env.FIREBASE_STORAGE_BUCKET
export const googleCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS

export const projectId = process.env.GOOGLE_PROJECT_ID
export const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
export const privateKey = process.env.PRIVATE_KEY?.replace(/\n/g, )
export const googlestorageBucket = process.env.GOOGLE_STORAGE_BUCKET