import './App.css';
import { Link } from "react-router-dom";
import logobq1  from './../assets/img/logobq1.png'
import logobq2  from './../assets/img/logobq2.png'

const Home = () => {

    return (
      <div className="menu-container">

        <img classname="logo-bq" src= {logobq1} alt= {logobq2}></img>
  
          <ul> 
          <Link to="/mesas" className='mesas-link'>Mesas</Link>
          <Link to="/cocina" className='cocina-link'>Cocina</Link>
          </ul>
  
          {/* <p className='bienvenida'>¡Bienvenida a Burger Queen!</p> */}
        
      </div>
    );
  }

  export default Home;