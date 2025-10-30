import NavMenu from "./Menu";

function TopBar() {
  return (
    <>
      <div className="topbar-container">
        <div className="row mt-2">
          <div className="col-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-4">
                <p>NIFTY50</p>
                <p className="point-index">10.02</p>
                <p>0</p>
              </div>
              <div className="d-flex gap-4">
                <p>Sensex</p>
                <p className="point-index">10.02</p>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <NavMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
