import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJkAiStTJAga4Rr6BINofSfwEnH74E_uM",
  authDomain: "burgerqueen-5784f.firebaseapp.com",
  projectId: "burgerqueen-5784f",
  storageBucket: "burgerqueen-5784f.appspot.com",
  messagingSenderId: "76448959540",
  appId: "1:76448959540:web:726807280f9932a28a0e61",
  measurementId: "G-P20Z7SQHXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a new document in collection "cities"
await setDoc(doc(db, "pedidos"), {
  name: "",
  pedido: "",
});

