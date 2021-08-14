import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import KEY from "./config.json"

const config = {
  apiKey: KEY.PUBLIC_FIREBASE_API_KEY,
  authDomain: `${KEY.PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${KEY.PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.asia-southeast1.firebasedatabase.app`,
  projectId: KEY.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: `${KEY.PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: KEY.MESSAGING_SENDER_ID,
  appId: KEY.APP_ID,
  measurementId: KEY.MEASUREMENT_ID
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase };