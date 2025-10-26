import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { useContext, useState } from "react";
import "./sidebar.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import BuyModel from "../utils/BuyModel.jsx";
import { BuyModelContext } from "../context/BuyModelContext.jsx";
function Sidebar() {
  return (
    <div>
      <BuyModel />

      <div className="sidebar-search">
        <div className="d-flex justify-content-between p-2 align-items-center">
          <div>
            <p className="text-muted " style={{ fontSize: "12px" }}>
              Search By equity , bse , nifty ,fut weekly , gold mck
            </p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: "12px" }}>
              {watchlist.length}/50
            </p>
          </div>
        </div>
      </div>
      <div className="watchlist-items">
        <ul>
          {watchlist.map((stock, index) => (
            <WatchListItems stock={stock} />
          ))}
        </ul>
      </div>
    </div>
  );
}
const WatchListItems = ({ stock, index }) => {
  const [showActionBar, setshowActionBar] = useState(false);
  const handleMousEnter = () => {
    setshowActionBar(true);
  };
  const handleMouseLeave = () => {
    setshowActionBar(false);
  };

  return (
    <li
      onMouseEnter={handleMousEnter}
      key={index}
      onMouseLeave={handleMouseLeave}
    >
      <div className="stock-container">
        <div className="stock">{stock.name}</div>
        <div className="stock-condition">
          <div className={stock.isDown ? "down" : "up"}>{stock.percent}</div>
          <div>
            {stock.isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </div>
          <div className={stock.isDown ? "down" : "up"}> ₹{stock.price}</div>
        </div>
      </div>
      {showActionBar && <WatclistActions uid={index} stock={stock}/>}
    </li>
  );
};
const WatclistActions = ({ uid , stock}) => {
  const {handleOpenBuyModel} = useContext(BuyModelContext);
  return (
    <div className="d-flex justify-content-between">
      <div></div>
      <div className="watchlist-action-options">
        <Tooltip title="Buy (B)" placement="top" >
          <button onClick={()=>handleOpenBuyModel(stock)}  className="btn btn-danger btn-sm">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button onClick={()=>handleOpenBuyModel(stock,'Sell')}  className="btn btn-primary btn-sm">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow>
          <button className="btn btn-secondary btn-sm">
            <GraphicEqIcon />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow>
          <button className="btn btn-warning btn-sm text-white">More</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
