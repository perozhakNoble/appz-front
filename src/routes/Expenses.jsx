import React, { useState } from "react";
import { Form, Outlet, useLoaderData } from "react-router-dom";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import { getExportFile } from "../services/export";

const categoryOptions = ["Проживання", "Харчування", "Одяг", "Предмети Гігієни", "Дитячі іграшки"];
const buttonExportClasses = "rounded p-1 px-5 font-bold text-white flex items-center disabled:opacity-70 ";

export async function loader({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const dateFrom = url.searchParams.get("dateFrom");
  const dateTo = url.searchParams.get("dateTo");

  return {
    category,
    dateFrom,
    dateTo,
  };
}

const Expenses = () => {
  const [isLoading, setLoading] = useState(null);

  const { category, dateFrom, dateTo } = useLoaderData();

  const download = async (type = "pdf") => {
    setLoading(type);

    const url = await getExportFile(category, dateFrom, dateTo, type);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "expenses." + type + (type === "xls" ? "x" : "");

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
    setLoading(null);
  };

  return (
    <div>
      <PageHeader text="Витрати" />

      <Form className="flex gap-6 p-4 mt-8">
        <select name="category" className="border-2 border-slate-400 w-40 rounded h-10 px-3">
          {categoryOptions.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="date" name="dateFrom" className="border-2 border-slate-400 w-40 rounded h-10" />
        <input type="date" name="dateTo" className="border-2 border-slate-400 w-40 rounded h-10" />
        <button type="submit" className="border-2 border-sky-400 px-3 rounded h-10 ml-4">
          Отримати графік
        </button>
      </Form>
      <div className="mt-16">
        <div className=" flex gap-4 ml-auto w-36 mr-36">
          <button
            type="button"
            className={`${buttonExportClasses}  bg-red-600 `}
            disabled={isLoading}
            onClick={() => download("pdf")}
          >
            {isLoading === "pdf" && (
              <div className="inline-block mr-2">
                <Loader />
              </div>
            )}
            PDF
          </button>
          <button
            type="button"
            className={`${buttonExportClasses}  bg-green-600 `}
            disabled={isLoading}
            onClick={() => download("xls")}
          >
            {isLoading === "xls" && (
              <div className="inline-block mr-2">
                <Loader />
              </div>
            )}
            XLS
          </button>
          <button
            type="button"
            className={`${buttonExportClasses}  border-cyan-600 border-2`}
            disabled={isLoading}
            onClick={() => download("csv")}
          >
            {isLoading === "csv" && (
              <div className="inline-block mr-2">
                <Loader />
              </div>
            )}
            <span className="text-red-600">C</span>
            <span className="text-green-600">S</span>
            <span className="text-indigo-600">V</span>
          </button>
        </div>
        <div className="w-full rounded h-96 m-4 mt-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
