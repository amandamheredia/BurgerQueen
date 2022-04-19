import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Mesas from './mesas.js';
import Cocina from './cocina.js';


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






      