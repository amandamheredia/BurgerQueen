import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJkAiStTJAga4Rr6BINofSfwEnH74E_uM",
  authDomain: "burgerqueen-5784f.firebaseapp.com",
  projectId: "burgerqueen-5784f",
  storageBucket: "burgerqueen-5784f.appspot.com",
  messagingSenderId: "76448959540",
  appId: "1:76448959540:web:726807280f9932a28a0e61",
  measurementId: "G-P20Z7SQHXK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log(db)

export const guardarPedido = async (nombre, pedido) => {
  console.log("este es el pedido")
  const order = await addDoc(collection(db, "pedidos"), {
      nombre,
      pedido,
      status: "Pendiente",
      createdAt: Timestamp.now(),
      total: order.reduce((total, item) => total + item.precio, 0)
  });
}

// export const getTasks = () => getDocs(collection(db, "pedidos"));

export const muroKitchen = async () => {
  const querySnapshot = await getDocs(collection(db, "pedidos"));

  return (querySnapshot.data);
}



