import './App.css';
import './mesas.js';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Mesas from './mesas.js';


export default function Home() {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <p className='bienvenida'>
          ¡Bienvenida a Burger Queen!
        </p>

         <button className= "mesas-button">Mesas</button>
         <button className= "cocina-button">Cocina</button>
         
        {/* <Link to="mesas" className='mesas'>Mesas</Link>
        <Link to="cocina" className='cocina'>Cocina</Link> */}

        <p className='modo'>Elige el modo que necesitas</p>
        {/* <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="mesas" element={<Mesas />} />
        </Route>
      </Routes> */}
      </header>
    </div>
  );
}

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="mesas">Mesas</Link>
//           </li>
//           <li>
//             <Link to="/cocina">Cocina</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }


