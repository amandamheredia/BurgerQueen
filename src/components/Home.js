import './App.css';
import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div className="menu-container">

          <p className='bienvenida'>¡Bienvenida a Burger Queen!</p>
  
          <ul> 
          <Link to="/mesas" className='mesas-link'>Mesas</Link>
          <Link to="/cocina" className='cocina-link'>Cocina</Link>
          </ul>
  
          <p className='modo'>Elige el modo que necesitas</p>
        
      </div>
    );
  }

  export default Home;