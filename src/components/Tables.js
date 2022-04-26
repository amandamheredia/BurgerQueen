// import { render } from '@testing-library/react';
import { React, useEffect, useState } from 'react';
// import Menu from "../public/menu.json"
import './App.css';


//FUNCION PARA TRAER LOS OBJETOS DE MENU.JSON

export default function Tables () {

  const [menu, setMenu] = useState()
  const [plato, setPlato] = useState()
  const [comida, setComida] = useState ({
      "id": "",
      "plato": "",
      "precio": "",
      "horario": ""
  })
  
  useEffect (() =>{
   fetch("menu.json")
   .then((response) => {
     return response.json()
   })
   .then((menu) => {
    console.log(menu)
    setMenu(menu)
    setPlato(menu.menu[0].plato)
    setComida({
      "id": "",
      "plato": menu.menu[0].plato,
      "precio": "",
      "horario": "" })
  })
  }, [])



  return (
    <div className="mesas-container">
      <p className='desayuno'>Desayuno</p>
      <ul> 
        {menu.menu.map(item => (
          <li key={item.id}>
            {item.plato} {item.precio}
          </li>
        ))}
      </ul>
    </div>
  );

} 
