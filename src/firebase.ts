import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBOjsZk6sXj1pb_Cgp-oC0-mvBtVXAHa-A",
  authDomain: "nwitter-reloa.firebaseapp.com",
  projectId: "nwitter-reloa",
  storageBucket: "nwitter-reloa.appspot.com",
  messagingSenderId: "1039727193365",
  appId: "1:1039727193365:web:25ccd631ec7cb2cbbc0d1c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);