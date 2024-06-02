import React from "react";
import AreaCard from "./AreaCard"; // Assuming correct file path
import "./AreaCards.scss";
import severityData from "./severitydata";

const totalAlerts = 100; // Example value for totalAlerts
// New data provided
const data = [
  {
    "timestamp": "2019-01-02T03:50:09.097718",
    "flow_id": 52373568,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 65036,
    "dest_ip": "138.68.3.71",
    "dest_port": 3306,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010937,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to mySQL port 3306",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:50:10.386108",
    "flow_id": 52491840,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 65386,
    "dest_ip": "138.68.3.71",
    "dest_port": 5915,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2002911,
      "rev": 5,
      "signature": "ET SCAN Potential VNC Scan 5900-5920",
      "category": "Attempted Information Leak",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:50:10.421359",
    "flow_id": 52507296,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 65438,
    "dest_ip": "138.68.3.71",
    "dest_port": 5432,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010939,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to PostgreSQL port 5432",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:50:10.576769",
    "flow_id": 52568784,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 49238,
    "dest_ip": "138.68.3.71",
    "dest_port": 1433,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010935,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to MSSQL port 1433",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:50:10.585758",
    "flow_id": 52576512,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 49269,
    "dest_ip": "138.68.3.71",
    "dest_port": 1521,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010936,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:50:10.621656",
    "flow_id": 52589280,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 49306,
    "dest_ip": "138.68.3.71",
    "dest_port": 5811,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2002910,
      "rev": 5,
      "signature": "ET SCAN Potential VNC Scan 5800-5820",
      "category": "Attempted Information Leak",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:50:11.315110",
    "flow_id": 52710912,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "8.42.77.171",
    "src_port": 49678,
    "dest_ip": "138.68.3.71",
    "dest_port": 22,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2001219,
      "rev": 19,
      "signature": "ET SCAN Potential SSH Scan",
      "category": "Attempted Information Leak",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:51:01.124914",
    "flow_id": 52713600,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "61.176.222.167",
    "src_port": 59947,
    "dest_ip": "138.68.3.71",
    "dest_port": 1433,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010935,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to MSSQL port 1433",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:51:01.124914",
    "flow_id": 52713600,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "61.176.222.167",
    "src_port": 59947,
    "dest_ip": "138.68.3.71",
    "dest_port": 1433,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2010935,
      "rev": 3,
      "signature": "ET SCAN Suspicious inbound to MSSQL port 1433",
      "category": "Potentially Bad Traffic",
      "severity": 2
    }
  },
  {
    "timestamp": "2019-01-02T03:51:01.124914",
    "flow_id": 52713600,
    "in_iface": "eth0",
    "event_type": "alert",
    "src_ip": "61.176.222.167",
    "src_port": 59947,
    "dest_ip": "138.68.3.71",
    "dest_port": 1433,
    "proto": "TCP",
    "alert": {
      "action": "allowed",
      "gid": 1,
      "signature_id": 2403410,
      "rev": 46061,
      "signature": "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 56",
      "category": "Misc Attack",
      "severity": 2
    }
  }
];

// Summarize the data by category
const categorySummary = data.reduce((summary, entry) => {
  const category = entry.alert.category;
  summary[category] = (summary[category] || 0) + 1;
  return summary;
}, {});



// Convert the category summary into the format required by AreaCard
const additionalCategoryData = Object.entries(categorySummary).map(([category, count]) => ({
  category,
  count,
  percent: (count / totalAlerts) * 100,
}));

const cardInfo = {
  title: "Alert Severity Distribution",
  value: `${totalAlerts} Alerts`,
  text: "Distribution of alerts by severity levels."
};

const colors = ["#e4e8ef", "#475be8", "#f56c6c", "#91cc75", "#fac858"];

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={colors}
        severityData={severityData}
        cardInfo={cardInfo}
      />
      {/* <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Most used category",
          value: "$8.2K",
          text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "",
          value: "$18.2K",
          text: "Available to payout",
        }}
      /> */}
      {/* <AreaCard
        colors={colors}
        severityData={additionalCategoryData}
        cardInfo={{
          title: "Alert Category Distribution 1",
          value: `${additionalCategoryData.reduce((total, entry) => total + entry.count, 0)} Alerts`,
          text: "Distribution of alerts by category."
        }}
      /> */}
      {/* <AreaCard
        colors={colors}
        severityData={additionalCategoryData}
        cardInfo={{
          title: "Alert Category Distribution 2",
          value: `${additionalCategoryData.reduce((total, entry) => total + entry.count, 0)} Alerts`,
          text: "Distribution of alerts by category."
        }}
      /> */}
    </section>
  );
};

export default AreaCards;
