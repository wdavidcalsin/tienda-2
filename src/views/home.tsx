import React, { Fragment } from "react";
import Cards from "../components/cards";
// import _ from "lodash";
import CountImage from "../api/descriptionImg.json";

function Home() {
   return (
      <div className="section-home">
         <div className="container">
            {CountImage.map((item: any) => (
               <Fragment>
                  <Cards title={item.title} />
               </Fragment>
            ))}
         </div>
      </div>
   );
}

export default Home;
