import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwHM2Tx40M3Lj-DwYo9KH-nnTqAGcOAJs",
  authDomain: "la-tiendita-bd435.firebaseapp.com",
  projectId: "la-tiendita-bd435",
  storageBucket: "la-tiendita-bd435.appspot.com",
  messagingSenderId: "333964769031",
  appId: "1:333964769031:web:ebb4af04e05dfb31c9f7a2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)