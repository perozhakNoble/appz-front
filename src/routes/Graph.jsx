/* eslint-disable no-lone-blocks */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { getGraphData } from "../services/graph";

import { GraphBuilder } from "../components/GraphBuilder.class";

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

const Graph = () => {
  const { graphData } = useLoaderData();

  const pieData = [
    { value: graphData.reduce((prevValue, current) => (prevValue += current.USD), 0), name: "USD", color: "#39CCCC" },
    {
      value: graphData.reduce((prevValue, current) => (prevValue += current.UAH), 0),
      name: "UAH",
      color: "#ffa534",
    },
  ];

  const LineGraphic = new GraphBuilder("LineChart")
    .setData(graphData)
    .setCastedianGrid({ stroke: "#ccc", strokeDasharray: "5 5" })
    .setMargin({ top: 5, right: 20, bottom: 25, left: 20 })
    .setXAxis({ dataKey: "date" })
    .setYAxis()
    .setTooltip()
    .setLines([
      {
        dataKey: "USD",
        stroke: "#447ef7",
      },
      {
        dataKey: "UAH",
        stroke: "#fb404b",
      },
    ])
    .render();

  const BarGraphic = new GraphBuilder("BarChart")
    .setData(graphData)
    .setCastedianGrid({ stroke: "#ccc", strokeDasharray: "3 3" })
    .setXAxis({ dataKey: "date" })
    .setYAxis()
    .setTooltip()
    .setBars([
      {
        dataKey: "USD",
        fill: "#8884d8",
      },
      {
        dataKey: "UAH",
        fill: "rgba(135,203,22,0.6)",
      },
    ])
    .setMargin({ top: 5, right: 20, bottom: 25, left: 20 })
    .setWidth(650)
    .setHeight(450)
    .render();

  const PieGraphic = new GraphBuilder("PieChart")
    .setData(pieData)
    .setPie({ dataKey: "value" })
    .setWidth(650)
    .setHeight(450)
    .render();

  return (
    <div className=" h-full p-2" style={{ width: "70vw" }}>
      {LineGraphic}
      <div className="h-20" />
      <div className="flex gap-2">
        {PieGraphic}
        {BarGraphic}
      </div>
      <div className="h-20" />
    </div>
  );
};

export default Graph;
{
  /* <ResponsiveContainer>
        <LineChart data={graphData} margin={{ top: 5, right: 20, bottom: 25, left: 20 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="USD" stroke="#447ef7" />
          <Line type="monotone" dataKey="UAH" stroke="#fb404b" />
        </LineChart>
      </ResponsiveContainer> */
}

{
  /* <ResponsiveContainer height={450} width={650}>
          <PieChart>
            <Pie
              dataKey={"value"}
              data={pieData}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              innerRadius="50%"
              paddingAngle={2}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer> */
}
{
  /* <ResponsiveContainer height={450} width={650}>
          <BarChart data={graphData} margin={{ top: 5, right: 20, bottom: 25, left: 20 }}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="USD" fill="#8884d8" />
            <Bar dataKey="UAH" fill="rgba(135,203,22,0.6)" />
          </BarChart>
        </ResponsiveContainer> */
}
