import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pg1 from './Páginas/App.js';

export default function conta(){
    return(
    <>
      <Router> 
        <header>
          <nav>
            <Link to="/" > Home </Link>
            <Link to="/pag1">Página 1</Link>
          </nav>
        </header>
        <main>
          
          <Routes>
            <Route exact path="/pag1" element={<Pg1/>}/>
          </Routes>          
        </main>
      </Router>
    </>
    )
}
