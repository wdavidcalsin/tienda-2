import React, { useState } from "react";
// import CountImage from "../api/descriptionImg.json";

function Cards({ title }: any) {
   const [value, setValue] = useState<boolean>(false);
   // const [count, setCount] = useState<number>(20);

   const alertar = (event: any) => {
      if (value === true) {
         setValue(false);
      } else {
         setValue(true);
      }
   };

   return (
      <div className="cards">
         <img
            src="https://www.esakha.com/files/product/image/5/orange-hd-png-download-png-image-orange-png-clipart-744.png"
            alt=""
         />
         <h1>{title}</h1>
         {value}
         <div className="reactions">
            <button
               className={`${value ? "button-item" : ""}`}
               type="button"
               onClick={alertar as any}
            >
               <img
                  src="https://www.flaticon.es/svg/static/icons/svg/535/535234.svg"
                  alt=""
               />
            </button>
            <button>
               <img
                  src="https://www.flaticon.es/svg/static/icons/svg/626/626394.svg"
                  alt=""
               />
            </button>
         </div>
      </div>
   );
}

export default Cards;
