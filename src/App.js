import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./Component/Header";
import StateManagement from "./Component/StateManagement";
import "bootstrap/dist/css/bootstrap.min.css"



const App = () => {
  return ( <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/state" element={<StateManagement/>}/>
      <Route path="/lazy" element={"Lazy Loading"}/>
    </Routes>
 </BrowserRouter>
 )
}

export default App;
