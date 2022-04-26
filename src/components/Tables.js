// import { render } from '@testing-library/react';
import { React, useEffect, useState } from 'react';
import menu from "../data/menu.json";
import './App.css';


//FUNCION PARA TRAER LOS OBJETOS DE MENU.JSON

export default function Tables () {

  const [productos, setProductos] = useState()
  const datamenu = menu.menu 

  // console.log(datamenu)
  // const [plato, setPlato] = useState()
  // const [comida, setComida] = useState ({
  //     "id": "",
  //     "plato": "",
  //     "precio": "",
  //     "horario": ""
  // })
  
  useEffect (() =>{
   fetch("menu.json")
   .then((response) => {
     console.log(response.json)
     return response.json()
   })
   .then((productos) => {
    console.log(menu)
    setProductos(menu)
    // setPlato(menu.menu[0].plato)
    // setComida({
    //   "id": "",
    //   "plato": menu.menu[0].plato,
    //   "precio": "",
    //   "horario": "" })
  })
  }, [])



  return (
    <div className="mesas-container">
      <p className='desayuno'>Desayuno</p>
      <p className='desayuno-items'>
        {datamenu.map(item => (
          <li key={item.id}>
            {item.plato} {item.precio} 
          </li>
        ))}
      </p>
    </div>
  );

} 
