import React, { Fragment } from "react";
import Cards from "../components/cards";
// import _ from "lodash";
import { useWishles } from "../Context/wishles-context";
import CountImage from "../api/descriptionImg.json";

function Home() {
   const { value_, setValue } = useWishles();

   const aumentar = () => {
      setValue(value_ + 1);
   };

   return (
      <div className="section-home">
         <div className="container">
            {CountImage.map((item: any) => (
               <Fragment>
                  <Cards title={item.title} />
                  <h2>{item.id}</h2>
               </Fragment>
            ))}
            <button onClick={aumentar}> +</button>
         </div>
      </div>
   );
}

export default Home;
