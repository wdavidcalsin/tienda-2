import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/header";
import Wishles from "../views/wishles";
import Carritos from "../views/carritos";
import Home from "../views/home";

export default function Rutes() {
   return (
      <Router>
         <div>
            <Header />

            <Switch>
               <Route path="/wishles">
                  <Wishles />
               </Route>
               <Route path="/carritos">
                  <Carritos />
               </Route>
               <Route path="/">
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}
