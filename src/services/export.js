export const getExportFile = async (
  //category, dateFrom, dateTo,
  type = "pdf"
) => {
  try {
    const res = await fetch(`http://localhost:8080/export-${type}`);
    //?category=${category}&start_date=${dateFrom}&end_date=${dateTo}
    const data = await res.blob();
    const url = URL.createObjectURL(data);
    return url;
  } catch (err) {
    throw new Response("", {
      status: 404,
      statusText: "Something went wrong",
    });
  }
};
