import React from 'react';
import { Routes,BrowserRouter,Route } from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import AddGame from './components/AddGame';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll/>} path="/" index />
          <Route element={<AddGame/>} path= "/AddGame" index />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;



