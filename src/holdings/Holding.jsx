import { holdings } from "../data/data";
import "./Holding.css";
function Holding() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="fs-5 mt-2 text-muted fw-normal">
            <i class="fa fa-hourglass-start" aria-hidden="true"></i>
            &nbsp; Holdings({holdings.length})
          </h2>
        </div>

        <div className="col-12 mt-3">
          <table className="table table-responsive border table-hover align-middle">
            <thead className="table-light">
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg Cost</th>
              <th>LTP</th>
              <th>Cur. Value</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </thead>

            <tbody>
              {holdings.map((data, index) => {
                const curValue = (data.price * data.qty).toFixed(2);
                const pl = ((data.price - data.avg) * data.qty).toFixed(2);

                return (<tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.qty}</td>
                  <td>{data.avg}</td>
                  <td>{data.price}</td>
                  <td>{curValue}</td>
                  <td  className={
                        pl >= 0 ? "text-success fw-semibold" : "text-danger fw-semibold"
                      }>{pl}</td>
                  <td>{data.net}</td>
                  <td>{data.day}</td>
                </tr>);
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Holding;
