import './App.css';
import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div className="menu-container">
        <header className="menu-header">

          <p className='bienvenida'>¡Bienvenida a Burger Queen!</p>
  
          <ul> 
          <Link to="/mesas" className='mesas'>Mesas</Link>
          <Link to="/cocina" className='cocina'>Cocina</Link>
          </ul>
  
          <p className='modo'>Elige el modo que necesitas</p>
        </header>
      </div>
    );
  }

  export default Home;