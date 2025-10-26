function Dashboard() {
  return (
    <div className="container mt-3">
      <h1 className="fs-3 text-muted fw-normal">Hi, User!</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          <h2 className="fs-5 mt-3 text-muted fw-normal">
            <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp; Equity
          </h2>
        </div>
        <div className="col-4 mt-4 text-center p-5 border-end">
          <h1 className="text-muted fw-normal">3.74k</h1>
          <p className="text-muted">Margin Available</p>
        </div>
        <div className="col-8 mt-4 text-start p-5 ">
          <h1 className="text-muted fw-normal fs-5">Margin Used 0 </h1>
          <p className="text-muted">Opening Balance 3.74k</p>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12">
          <h2 className="fs-5 mt-2 text-muted fw-normal">
            <i className="fa fa-hourglass-start" aria-hidden="true"></i>
            &nbsp; Holdings(13)
          </h2>
        </div>
        <div className="col-4 mt-2 text-center p-5 border-end">
          <h1 className=" fw-normal text-success">
            1.55k <span className="fs-5">+5.20%</span>
          </h1>
          <p className="text-muted ">P&L</p>
        </div>
        <div className="col-8 mt-4 text-start p-5 ">
          <h1 className="text-muted fw-normal fs-5">Curren Value 31.43k </h1>
          <p className="text-muted text-start">Investment 29.88k</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Dashboard;
