import { createElement, React, useEffect, useState } from 'react';
import menu from "../data/menu.json";
import eliminar  from './../assets/img/eliminar.png'
import './App.css';


export default function Tables () {

  //FUNCION PARA TRAER LOS OBJETOS DE MENU.JSON
  const [comida, setComida] = useState(menu.menu)
  //FUNCION PARA SUMAR Y BORRAR 
  const [total, setTotal] = useState(() => totalInicial())
  
  
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

  function totalInicial () {
    console.log ('hola lesbianas de chile')
  
    return (

      0
  
    // {desayuno.map(objeto => (
    //   <p {...totalInicial} className='total-inicial' key={objeto.id}>
    //     {objeto.plato}
    //   </p>
    //  ))}
  
    )
    }


  function borrarItem () {

    setTotal(prevItem => prevItem - 1)  
  }

  function agregarItem () {
   
    setTotal(prevItem => prevItem + 1) 
    
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
          <button onClick={agregarItem} className='boton-item-d' key={item.id}>
            {item.plato} {item.precio}
          </button>
         ))}
         </ul>
      
      </section>

      <section className='almuerzo'>

      <header className='almuerzo-header'>Almuerzo y Cena</header>
  
       <ul>
        {almuerzo.map(item => (
          <button onClick={agregarItem} className='boton-item-a' key={item.id}>
            {item.plato} {item.precio}
          </button>
        ))}
        </ul>
      
      </section>

      <section className='pedido'>
        <header className='total-header'>Total</header>

        <span>{total}</span>
        

        <button onClick={borrarItem}> <img className='boton-basurero' src='eliminar'></img></button>
        
        {/* <img className='nota-pedido' src='https://64.media.tumblr.com/d188740037e1ad3759e515ef57e7269d/bffd6c491df88dba-47/s1280x1920/e81246329eb99aea36cf4a1163feec5a32167940.pnj'></img> */}
      </section>
    </div>
  );

} 
