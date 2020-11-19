import React, { createContext, useState, useContext } from "react";
import { WishlesInterface } from "./wishlesInter";

export const WishlesContext = createContext<WishlesInterface>({} as any);

export function WishlesProvider({ children }: any) {
   const [value_, setValue] = useState<number>(1);

   return (
      <WishlesContext.Provider value={{ value_, setValue }}>
         {children}
      </WishlesContext.Provider>
   );
}

export function useWishles() {
   const context = useContext(WishlesContext);
   const { value_, setValue } = context;
   return {
      value_,
      setValue,
   };
}
