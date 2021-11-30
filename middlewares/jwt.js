import admin from 'firebase-admin';
import { createRequire } from "module";
const require = createRequire(import.meta.url); // construct the require method
import dotenv from 'dotenv'
dotenv.config()
admin.initializeApp({
    credential: admin.credential.cert({
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID
    })
});
export const verifyToken = async (req, res, next) => {
    const token = req.body.idToken;
    console.log(token)
    const decoded = await admin.auth().verifyIdToken(token,true)
    if (decoded) {
        res.send("hola")
    }
    else {
        res.send("adios")
    }
}
