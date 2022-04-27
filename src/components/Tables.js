import { React, useEffect, useState } from 'react';
import menu from "../data/menu.json";
import './App.css';


//FUNCION PARA TRAER LOS OBJETOS DE MENU.JSON

export default function Tables () {

  const [comida, setComida] = useState(menu.menu)
  
  useEffect (() =>{
   fetch("menu.json")
   .then((response) => {
     console.log(response.json)
     return response.json()
   })
   .then(() => {
    console.log(menu)
    setComida(menu)
  })
  }, [])

 const desayuno = comida.filter (plato => plato.horario === 'Desayuno')
 const almuerzo = comida.filter (plato => plato.horario === 'Almuerzo y cena')

  return (
    <div className="mesas-container">

      <header className='top-mesas'>Mesas</header> 

      <section className='desayuno'>

      <p className='desayuno-header'>Desayuno</p>
      
         <ul>
         {desayuno.map(item => (
          <button className='boton-item-d' key={item.id}>
            {item.plato} {item.precio}
          </button>
         ))}
         </ul>
      
      </section>

      <section className='almuerzo'>

      <header className='almuerzo-header'>Almuerzo y Cena</header>
  
       <ul>
        {almuerzo.map(item => (
          <button className='boton-item-a' key={item.id}>
            {item.plato} {item.precio}
          </button>
        ))}
        </ul>
      
      </section>

      <section className='pedido'>
        <header className='total-header'>Total</header>
      </section>
    </div>
  );

} 
