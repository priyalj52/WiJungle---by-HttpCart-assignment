import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AreaCard = ({ colors, severityData, cardInfo }) => {
  const renderTooltipContent = (value) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="area-card">
      <div className="area-card-info">
        <h5 className="info-title">{cardInfo.title}</h5>
        <div className="info-value">{cardInfo.value}</div>
        <p className="info-text">{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
        <PieChart width={200} height={200}>
          <Pie
            data={severityData}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="percent"
          >
            {severityData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

AreaCard.propTypes = {
  colors: PropTypes.array.isRequired,
  severityData: PropTypes.array.isRequired,
  cardInfo: PropTypes.object.isRequired,
};

export default AreaCard;
