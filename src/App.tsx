import React from "react";
import "./App.scss";
import { WishlesProvider } from "./Context/wishles-context";
import Rutes from "./router/index";

function App() {
   return (
      <WishlesProvider>
         <Rutes />
      </WishlesProvider>
   );
}

export default App;
