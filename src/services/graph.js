import axios from "axios";

export const getGraphData = async (category, dateFrom, dateTo) => {
  try {
    const res = await axios.get(`http://localhost:8080/expenses`, {
      params: {
        category,
        start_date: dateFrom,
        end_date: dateTo,
      },
    });
    const data = res.data;
    return data;
  } catch (err) {
    throw new Response("", {
      status: 404,
      statusText: "Something went wrong",
    });
  }
};
