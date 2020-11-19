import React from "react";
import { Link } from "react-router-dom";
import Badge from "./badge";

function Header() {
   return (
      <nav className="header-navCB">
         <div className="container">
            <Link to="/">Tienda 2</Link>
            <ul className="lista-nav">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/wishles">Wishles</Link>
                  <Badge />
               </li>
               <li>
                  <Link to="/carritos">Carritos</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Header;
