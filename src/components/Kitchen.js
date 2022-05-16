import './App.css';
import { db } from './firebase';
import { muroKitchen } from './firebase';
import { collection, query, orderBy, getDocs } from "firebase/firestore"
import { useEffect, useRef, useState } from 'react';

function Kitchen(pedido) {

  const [orders, setOrders] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await muroKitchen()
      setOrders(data)
      console.log(data)
    }
    fetchData()
  }, [])


  return (
    <div className='cocina-container'>
      <p className='top-cocina'>Cocina</p>
      <div className='order-kitchen'>
        Cliente: {orders.map(element => <p>{element.data().nombre}</p>)}
        {/* { orders.map(item => <p>{element.data()?.pedido?.plato}</p>) } */}
        </div> 
    </div>
        )};
export default Kitchen;

