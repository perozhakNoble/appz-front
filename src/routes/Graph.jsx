import React, { PureComponent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getGraphData } from "../services/graph";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Sector,
  PieChart,
  Pie,
} from "recharts";

export async function loader({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const dateFrom = url.searchParams.get("dateFrom");
  const dateTo = url.searchParams.get("dateTo");

  const graphData = await getGraphData(category, dateFrom || null, dateTo || null);
  return {
    graphData: graphData?.map((data) => ({
      date: data.date,
      USD: data.by_currencies.find((a) => a.currency === "USD")?.amount || 0,
      UAH: data.by_currencies.find((a) => a.currency === "UAH")?.amount || 0,
    })),
  };
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontSize={10} textAnchor="end" fill="#666" transform="rotate(-30)">
          {payload.value}
        </text>
      </g>
    );
  }
}

const Graph = () => {
  const { graphData } = useLoaderData();

  ///

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    const onlyRate = false;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        {onlyRate ? (
          <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${(
            percent * 100
          ).toFixed(2)}%`}</text>
        ) : (
          <>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#333"
            >{`Amount ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </>
        )}
      </g>
    );
  };
  ///

  const pieData = [
    { value: graphData.reduce((prevValue, current) => (prevValue += current.USD), 0), name: "USD" },
    {
      value: graphData.reduce((prevValue, current) => (prevValue += current.UAH), 0),
      name: "UAH",
    },
  ];

  return (
    <div className=" h-full p-2" style={{ width: "70vw" }}>
      <ResponsiveContainer>
        <LineChart data={graphData} margin={{ top: 5, right: 20, bottom: 25, left: 20 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="USD" stroke="#447ef7" />
          <Line type="monotone" dataKey="UAH" stroke="#fb404b" />
        </LineChart>
      </ResponsiveContainer>

      <div className="h-20" />

      <div className="flex gap-2">
        <ResponsiveContainer height={450} width={550}>
          <PieChart>
            <Pie
              dataKey={"value"}
              data={pieData}
              fillRule="nonzero"
              fill={"#ffa534"}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              innerRadius="50%"
              paddingAngle={2}
            />
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer height={450} width={650}>
          <BarChart data={graphData} margin={{ top: 5, right: 20, bottom: 25, left: 20 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="USD" fill="#8884d8" />
            <Bar dataKey="UAH" fill="rgba(135,203,22,0.6)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default Graph;
