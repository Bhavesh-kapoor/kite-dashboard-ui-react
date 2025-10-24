import { positions } from "../data/data";
import "./positions.css";

function Position() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Header */}
        <div className="col-12">
          <h2 className="fs-5 mt-2 text-muted fw-normal">
            <i className="fa fa-hourglass-start" aria-hidden="true"></i>
            &nbsp; Positions({positions.length})
          </h2>
        </div>

        {/* Table */}
        <div className="col-12 mt-3">
          <table className="table table-bordered table-hover align-middle positions-table">
            <thead className="table-light">
              <tr>
                <th>Position</th>
                <th>Qty</th>
                <th>Avg Cost</th>
                <th>LTP</th>
                <th>Cur. Value</th>
                <th>P&amp;L</th>
                <th>Net Chg.</th>
                <th>Day Chg.</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((p, index) => {
                // calculate derived values
                const curValue = (p.ltp * p.qty).toFixed(2);
                const diff = p.ltp - p.avg;
                const pnl = (diff * p.qty).toFixed(2);
                const isProfit = pnl >= 0;

                return (
                  <tr key={index}>
                    <td>{p.instrument}</td>
                    <td>{p.qty}</td>
                    <td>{p.avg.toFixed(2)}</td>
                    <td>{p.ltp.toFixed(2)}</td>
                    <td className="text-secondary">₹{curValue}</td>
                    <td
                      className={`fw-semibold ${
                        isProfit ? "text-success" : "text-danger"
                      }`}
                    >
                      ₹{pnl}
                    </td>
                    <td className={isProfit ? "text-success" : "text-danger"}>
                      {p.netChg}
                    </td>
                    <td className={isProfit ? "text-success" : "text-danger"}>
                      {p.dayChg}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Position;
