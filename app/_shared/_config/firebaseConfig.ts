import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX-MVfT1EX-I9nT4UiTipNfde0Lbp7i-U",
  authDomain: "mariostore-87335.firebaseapp.com",
  projectId: "mariostore-87335",
  storageBucket: "mariostore-87335.appspot.com", // ✅ CORREGIDO
  messagingSenderId: "186615003297",
  appId: "1:186615003297:web:87ad45c18a264f80f498e0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
