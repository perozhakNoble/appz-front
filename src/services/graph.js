export const getGraphData = async (category, dateFrom, dateTo) => {
  try {
    const res = await fetch(
      `http://localhost:8080/expenses/?category=${category}&start_date=${dateFrom}&end_date=${dateTo}`
    );
    const data = res.json();
    return data;
  } catch (err) {
    throw new Response("", {
      status: 404,
      statusText: "Something went wrong",
    });
  }
};
