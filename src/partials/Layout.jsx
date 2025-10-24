import TopBar from "./TopBar";
import Sidebar from "../sidebar/Sidebar";
function Layout({Component}) {
  return (
    <>
      <TopBar />
      <div className="row">
        <div className="col-4 favourite">
          <Sidebar />
        </div>
        <div className="col-8">
            <Component/>
         
        </div>
      </div>
    </>
  );
}

export default Layout;
