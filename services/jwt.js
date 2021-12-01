import admin from 'firebase-admin';
import jsonwebtoken from  'jsonwebtoken'
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
const verifyToken = async (token) => {
    try {
        const decoded = await admin.auth().verifyIdToken(token)
        return decoded ? true : false;
    } catch (error) {
        console.error(error)
    }
}

const generateAccessToken = (email) => {
    return jsonwebtoken.sign({email : email},process.env.SECRET_TOKEN,{expiresIn : process.env.EXPIRES_IN})
}
const generateRefreshToken = (email) => {
    return jsonwebtoken.sign({email : email},process.env.SECRET_TOKEN_REFRESH)
}
export const createNewJWT = (req,res) =>{
    let token = req.body.idToken;
    let email = req.body.email
    if (verifyToken(token)) {
        res.send({data : {access_token :generateAccessToken(email),refresh_token : generateRefreshToken(email)}})
    } 
    else {
        res.send(404)
    }
}
