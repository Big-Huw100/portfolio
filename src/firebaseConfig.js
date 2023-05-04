import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBYBhuP__OSzz9yO-XRwLAOUIpDc6J9Gg8",
  authDomain: "profilecontactpage.firebaseapp.com",
  projectId: "profilecontactpage",
  storageBucket: "profilecontactpage.appspot.com",
  messagingSenderId: "421034548131",
  appId: "1:421034548131:web:035ae77d41c4f72b175816"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);