import './App.css';
import { db } from './firebase';
import { muroKitchen } from './firebase';
import { collection, query, orderBy, getDocs } from "firebase/firestore"
import { useEffect, useRef, useState } from 'react';

function Kitchen() {

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
    <div className='order-kitchen'>
      <p className='top-cocina'>Cocina</p>
        Cliente: {orders.map(element => <li>{element.data().nombre}</li>)}
        {/* { orders.map(item => <p>{element.data()?.pedido?.plato}</p>) } */}
        </div> 
  
        )};
export default Kitchen;

