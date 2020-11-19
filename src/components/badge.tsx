import React from "react";
import { useWishles } from "../Context/wishles-context";

function Badge() {
   const { value_ } = useWishles();

   return (
      <div>
         <span className="badge">{value_}</span>{" "}
      </div>
   );
}

export default Badge;
