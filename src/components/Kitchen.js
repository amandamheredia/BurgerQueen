import './App.css';
import { completarPedido, db } from './firebase';
import { Link } from 'react-router-dom';
import { muroKitchen } from './firebase';
import { collection, query, getDocs, onSnapshot, updateDoc, doc, orderBy } from "firebase/firestore"
import { useEffect, useState } from 'react';

function Kitchen() {

  const [orders, setOrders] = useState([])
  const ordersRef = collection(db, "pedidos")

  useEffect(() => {
    const fetchData = async () => {
      const data = await muroKitchen()
      setOrders(data)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   const q = query(ordersRef, orderBy("created", "desc"));

  //   const getOrders = onSnapshot(q, (snapshot) =>
  //     setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   );
  //   return getOrders;
  // }, []);


  return (
    <div className='kitchen-container'>
      <p className='top-cocina'>Cocina</p>
      <p className='incoming-pedido'>Pedidos entrantes</p>

      {orders.map(element => {
        // console.log(element.id)
        return (
          <div className='pedidos-container'>
            <p className='nombre-cliente'>{element.data().nombre}</p>
            <li className='estado-pedido'>{element.data().status}</li>
            {/* <p>{element.id}</p> */}

            {element.data().pedido.map(item => {
              return (
                <p className='plato-precio'>{item.plato}
                </p>
              )
            })}
            <button className="btnReady" onClick={() => completarPedido(element.id, element.status) }> Pedido listo </button>
          </div>
        )
      }
      )}
      <div className="back ready">
        <Link to="/" className="returnbtn">
          De vuelta al home
        </Link>
      </div>
    </div>
    
  )
};
export default Kitchen;

