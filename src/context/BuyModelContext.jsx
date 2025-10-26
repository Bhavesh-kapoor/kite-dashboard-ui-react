import { createContext, useState } from "react";
import BuyModel from "../utils/BuyModel";

export const BuyModelContext = createContext();

export const BuyModelProvider = ({ children }) => {
  const [stock, setStock] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [mode, setMode] = useState('Buy');

  const handleOpenBuyModel = (stock,ordermode='Buy') => {
    setMode(ordermode);
    setStock(stock);
    setOpenModel(true);
  };
  const handleCloseBuyModel = () => {
    setOpenModel(false);
    setStock(null);
  };

  return (
    <BuyModelContext.Provider value={{stock , openModel ,handleOpenBuyModel,handleCloseBuyModel ,mode}}>{children}

    {openModel  && <BuyModel  stock={stock} open={openModel}  />}
    

    
    </BuyModelContext.Provider>
  );
};
