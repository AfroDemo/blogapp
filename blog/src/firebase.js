import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCw9FNiK9ghwkVeZ9aqMShv0pYRMSs0PF0",
  authDomain: "blogprojects-2731d.firebaseapp.com",
  projectId: "blogprojects-2731d",
  storageBucket: "blogprojects-2731d.appspot.com",
  messagingSenderId: "74981090553",
  appId: "1:74981090553:web:7574afbdef23b2deb72e28",
  measurementId: "G-9CS6CKXY0B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();