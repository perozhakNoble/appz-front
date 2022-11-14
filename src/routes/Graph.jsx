import React from "react";
import { useLoaderData } from "react-router-dom";
import { getGraphData } from "../services/graph";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const dateFrom = url.searchParams.get("dateFrom");
  const dateTo = url.searchParams.get("dateTo");

  const graphData = await getGraphData(category, dateFrom, dateTo);
  return {
    graphData: graphData?.map((data) => ({
      date: data.date,
      usd: data.by_currencies.find((a) => a.currency === "USD")?.amount || 0,
      uah: data.by_currencies.find((a) => a.currency === "UAH")?.amount || 0,
    })),
  };
}

const Graph = () => {
  const { graphData } = useLoaderData();
  console.log(graphData);
  return (
    <div className=" h-full p-2" style={{ width: "80vw" }}>
      <ResponsiveContainer>
        <LineChart data={graphData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="usd" stroke="#8884d8" />
          <Line type="monotone" dataKey="uah" stroke="#33fa56" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
