import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./Component/Header";
import LazyLoading from "./Component/lazyLoading";
import StateManagement from "./Component/StateManagement";
import "bootstrap/dist/css/bootstrap.min.css"



const App = () => {
  return ( <BrowserRouter>
    <Header/>
    <div className="container mt-5">
    <Routes>
      <Route path="/state" element={<StateManagement/>}/>
      <Route path="/lazy" element={<LazyLoading/>}/>
    </Routes>
    </div>
 </BrowserRouter>
 )
}

export default App;
