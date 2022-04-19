import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
// import Mesas from './mesas.jsx';
// import Cocina from './cocina.jsx';


function App () {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/mesas" element={<Mesas />} />
<Route path="/cocina" element={<Cocina/>} />
</Routes>
</div>
  )
}

export default App;

function Mesas() {
  return (
    <div>
      <p>Hola estas son las mesas</p>
    </div>
  );
}

function Cocina () {
  return (
    <div>
        <p>Hola esta es la cocina</p>
    </div>
    
  );
}





      