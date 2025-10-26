import TopBar from "./TopBar";
import Sidebar from "../sidebar/Sidebar";
import { BuyModelProvider } from "../context/BuyModelContext";
import { ToastContainer } from "react-toastify";
function Layout({Component}) {
  return (
    <>
    <BuyModelProvider>
      <ToastContainer/>
      <TopBar />
      <div className="row">
        <div className="col-4 favourite">
          <Sidebar />
        </div>
        <div className="col-8">
            <Component/>
         
        </div>
      </div>
       </BuyModelProvider>
    </>
   
  );
}

export default Layout;
