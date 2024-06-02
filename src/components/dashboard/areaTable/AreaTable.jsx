import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Category",
  "Flow ID",
  "Time Stamp",
  "Event Type",
  "Severity",
  "Protocol",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    category: "Potentially Bad Traffic",
    flow_id: 52373568,
    time_stamp: "2019-01-02T03:50:09.097718",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 101,
    category: "Attempted Information Leak",
    flow_id: 52491840,
    time_stamp: "2019-01-02T03:50:10.386108",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 102,
    category: "Potentially Bad Traffic",
    flow_id: 52507296,
    time_stamp: "2019-01-02T03:50:10.421359",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 103,
    category: "Potentially Bad Traffic",
    flow_id: 52568784,
    time_stamp: "2019-01-02T03:50:10.576769",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 104,
    category: "Potentially Bad Traffic",
    flow_id: 52576512,
    time_stamp: "2019-01-02T03:50:10.585758",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 105,
    category: "Attempted Information Leak",
    flow_id: 52589280,
    time_stamp: "2019-01-02T03:50:10.621656",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 106,
    category: "Attempted Information Leak",
    flow_id: 52710912,
    time_stamp: "2019-01-02T03:50:11.315110",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 107,
    category: "Potentially Bad Traffic",
    flow_id: 52713600,
    time_stamp: "2019-01-02T03:51:01.124914",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
  {
    id: 108,
    category: "Misc Attack",
    flow_id: 52713600,
    time_stamp: "2019-01-02T03:51:01.124914",
    event_type: "alert",
    severity: 2,
    protocol: "TCP",
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.category}</td>
                  <td>{dataItem.flow_id}</td>
                  <td>{dataItem.time_stamp}</td>
                  <td>{dataItem.event_type}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.severity}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.severity}</span>
                    </div>
                  </td>
                  <td>{dataItem.protocol}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
