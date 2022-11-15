import axios from "axios";

export const getExportFile = async (category, dateFrom, dateTo, type = "pdf") => {
  try {
    const res = await axios.get(`http://localhost:8080/export-${type}`, {
      params: {
        category,
        start_date: dateFrom,
        end_date: dateTo,
      },
      responseType: "blob",
    });
    const data = res.data;
    const url = URL.createObjectURL(data);
    return url;
  } catch (err) {
    throw new Response("", {
      status: 404,
      statusText: "Something went wrong",
    });
  }
};
