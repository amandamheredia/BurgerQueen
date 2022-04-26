// import { render } from '@testing-library/react';
// import { React, Fragment, useEffect, useState } from 'react';
// // import Menu from "../public/menu.json"
// import './App.css';


// //FUNCION PARA TRAER LOS OBJETOS DE MENU.JSON

// export default function Tables () {

//   const [menu, setMenu] = useState([])

//   useEffect (() =>{
//    fetch("menu.json")
//    .then((response) => {
//      return response.json()
//    })
//    .then((menu) => {
//     console.log(menu.menu)
//     setMenu(menu)
//   })
//   }, [])

//   return (
//     <div className="mesas-container">
//       <p className='desayuno'>Desayuno</p>
//     </div>
//   );


//   function Menu () {

//     //INTENTO 5 PT 1

//     const MenuDisplay = props => {
//       // console.log(props.menu);
    
//       if (props.menu === null) {
//         return (
//           <div>
//             <p>Menú desayuno</p>
//           </div>
//         );
//       }


//       //INTENTO 4 PT 1

//     // const menuItems = menu.map((d) => <li key={d.plato}>{d.precio}</li>);

//   return (

//      //INTENTO 4 PT 2

//     // <div className='menu-container'>
//     // {menuItems}
//     // </div>

//     //INTENTO 5 PT 2
//    <ul>
//     {menu.map((item, index) => (

//     <button className="option-buttons"
//      key={index}
//      plato={item.plato}
//      precio={item.precio}
//      onClick={() => props.onClick(item.precio, item.name)}>
//     </button>

//           // INTENTO 3 (CREO?)

//         //   <p key={menu.id}>Desayuno</p>

//         //INTENTO 2
          
//         //  <>
//         //  {menu.map(({ id, plato, precio }) => (
//         //  <p key={id}>Plato: {plato} cuesta {precio}</p>
//         //  ))}
//         //  </>
        
//           //INTENTO 1

//           // <Fragment key={menu.id}>
//           //   <li>{menu.id}</li>
//           //   <li>{menu.plato}</li>
//           //   <li>{menu.precio}</li>
//           //   <li>{menu.horario}</li>
//           // </Fragment>
//         ))}
//    </ul>

    
//      );
//    }
//  }
// } 
