import { React, useEffect, useState } from 'react';
import menu from "../data/menu.json";
import eliminar  from './../assets/img/eliminar.png' 
import './App.css';


export default function Tables () {

  //ESTADO DE LA COMIDA
  const [comida, setComida] = useState(menu.menu)
  //ESTADO DEL TOTAL
  // const [total, setTotal] = useState(() => totalInicial())
  //ESTADO DEL CARRITO
  const [cart, setCart] = useState ([])
  
  
  useEffect (() =>{
   fetch("menu.json")
   .then((response) => {
    //  console.log(response.json)
     return response.json()
   })
   .then(() => {
    console.log(menu)
    setComida(menu)
  })
  }, [])

  // function totalInicial () {
  //   console.log ('hola lesbianas de chile')
  
  //   return (
  //     0
  //   )
  //   }

  // function borrarItem () {

  //   setTotal(prevItem => prevItem - 1)  
  // }

  // function agregarItem () {
   
  //   setTotal(prevItem => prevItem + 1) 
    
  // }

  const addToCart = (item) => {
    console.log("estamos en el carrito")
    setCart([...cart, {...item}])
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item !== productToRemove))
  }

 const desayuno = comida.filter (plato => plato.horario === 'Desayuno')
 const almuerzo = comida.filter (plato => plato.horario === 'Almuerzo y cena')


  return (
    <div className="mesas-container">

      <header className='top-mesas'>Mesas</header> 

      <section className='desayuno'>

      <p className='desayuno-header'>Desayuno</p>
      
         <ul>
         {desayuno.map(item => (
          <button onClick={() => addToCart(item)} className='boton-item-d' key={item.id}>
            {item.plato} 
            {item.precio}
          </button>
         ))}
         </ul>
      
      </section>

      <section className='almuerzo'>

      <header className='almuerzo-header'>Almuerzo y Cena</header>
  
       <ul>
        {almuerzo.map(item => (
          <button onClick={() => addToCart(item)} className='boton-item-a' key={item.id}>
            {item.plato}
            {item.precio}
          </button>
        ))}
        </ul>
      
      </section>

      <section className='pedido'>
        <header className='total-header'>Pedido ({cart.length})</header>

        {cart.map((item) => (
          <div className='pedidos' key={item}>
            {item.plato}
            {item.precio}
            <button onClick={() => removeFromCart(item)}>Borrar</button>
          </div>

        ))}

        {/* <span>{total}</span> */}

        {/* <button onClick={}> <img className='boton-basurero' src='eliminar' alt='borrar'></img></button> */}
        
        {/* <img className='nota-pedido' src='https://64.media.tumblr.com/d188740037e1ad3759e515ef57e7269d/bffd6c491df88dba-47/s1280x1920/e81246329eb99aea36cf4a1163feec5a32167940.pnj'></img> */}
      </section>
    </div>
  );

} 
