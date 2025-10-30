import TopBar from "./TopBar";
import Sidebar from "../sidebar/Sidebar";
import { BuyModelProvider } from "../context/BuyModelContext";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Layout({ Component }) {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies();

  // check  if the cookies has token or not

  const verifyCookie = () => {
    console.log(cookies);
    if (!cookies.token) {
      navigate("/login");
    }
  };
  useEffect(() => {
    verifyCookie();
  });

  return (
    <>
      <BuyModelProvider>
        <ToastContainer />
        <TopBar />
        <div className="row">
          <div className="col-4 favourite">
            <Sidebar />
          </div>
          <div className="col-8">
            <Component />
          </div>
        </div>
      </BuyModelProvider>
    </>
  );
}

export default Layout;
