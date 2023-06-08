import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMIAN,
    projectID: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

if (firebase.getApps.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;