import { React, useEffect, useState } from 'react';
import menu from "../data/menu.json";
import eliminar  from './../assets/img/eliminar.png'
import borrar  from './../assets/img/borrar.png' 
import notacarrito  from './../assets/img/notacarrito.png'
import { guardarPedido } from './firebase';
import './App.css';


export default function Tables () {

  //ESTADO DE LA COMIDA
  const [comida, setComida] = useState(menu.menu)
  //ESTADO DEL CARRITO
  const [cart, setCart] = useState ([])
  //ESTADO DEL INPUT
  const [nombre, setNombre] = useState("")

  function onChange (e) {
   setNombre(e.target.value)
  }
  
  useEffect (() =>{
   fetch("menu.json")
   .then((response) => {
     return response.json()
   })
   .then(() => {
    console.log(menu)
    setComida(menu)
  })
  }, [])

  //FUNCION PARA AGREGAR ITEMS AL CARRITO
  const addToCart = (item) => {
    console.log("estamos en el carrito")
    setCart([...cart, {...item}])
  }
  //FUNCION PARA ELIMINAR ITEMS DEL CARRITO
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item !== productToRemove))
  }

  //FUNCION PARA MOSTRAR EL TOTAL DEL CARRITO
  const precioToNumero = (precioString => {
    return parseInt(precioString.slice(1))
   }) 

  const total = cart.reduce((acc,curr) => acc + precioToNumero(curr.precio), 0)

  //FUNCION PARA MOSTRAR ITEMS DE ALMUERZO Y DESAYUNO EN SUS SECCIONES
 const desayuno = comida.filter (plato => plato.horario === 'Desayuno')
 const almuerzo = comida.filter (plato => plato.horario === 'Almuerzo y cena')


  return (
    <div className="mesas-container">

        {/* <header className='top-mesas'>Mesas</header>  */}
        
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

      <header className='almuerzo-header'>Almuerzo</header>
  
       <ul>
        {almuerzo.map(item => (
          <button onClick={() => addToCart(item)} className='boton-item-a' key={item.id}>
            {item.plato}
            {item.precio}
          </button>
        ))}
        </ul>
      
      </section>

      <img className='nota-pedido' src= {notacarrito}></img>

      <section className='pedido'>
      
        <header className='total-header'>Pedido ({cart.length})</header>
           
        <p className='nombre-clienta'>Nombre de la clienta: <input className='input-nombre' value={nombre} onChange={onChange}></input></p>
    

        {cart.map((item) => (
          <div className='items-del-pedido' key={item}>
            {item.plato}
            {item.precio}
            <button onClick={() => removeFromCart(item)}> <img className='boton-basurero' src= {borrar} alt={eliminar}></img></button>
          </div>
        ))}

        <p className='total-pedido'>Total: ${total} </p>

        <button onClick= {() => guardarPedido(nombre, cart)} className='boton-enviar'>Enviar a cocina</button>
      
      </section>
    </div>
  );

} 
