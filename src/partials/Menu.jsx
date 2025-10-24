import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const [activeMenu, setactiveMenu] = useState(0);
  //   handle the active menu part
  const MenuClass = "menu";
  const selectedMenuClass = "active-menu";
  function handMenuClick(index) {
    setactiveMenu(index);
  }
  const menuItem = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
    { name: "UserId", path: "/user" },
  ];
  return (
    <>
      <div className="menu-conatiner">
        <div>
          <img src="./zerodha-kite-logo-png_seeklogo-487028.png" />
        </div>
        <div>
          <ul>
            {menuItem.map((item, index) => (
              <li key={index}>
                <Link
                  className={location.pathname == item.path ?selectedMenuClass : MenuClass }
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
