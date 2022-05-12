import './App.css';
import { muroKitchen } from './firebase';
import { useEffect, useRef, useState } from 'react';

function Kitchen (pedido) {

  
  const data = useRef()

  useEffect (() => {
   data.current = muroKitchen()
   console.log(data)
   }, [])

    return (
      <div className='cocina-container'>
          <p className='top-cocina'>Cocina</p>
            
      </div>
      
    );
  }

  export default Kitchen;

  