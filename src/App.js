import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Tables from './components/Tables.js';
import Kitchen from './components/Kitchen.js';


function App () {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/mesas" element={<Tables />} />
<Route path="/cocina" element={<Kitchen/>} />
</Routes>
</div>
  )
}

export default App;








      