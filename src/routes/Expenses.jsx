import React from "react";
import { Form, Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getExportFile } from "../services/export";

const categoryOptions = ["Проживання", "Харчування", "Одяг", "Предмети Гігієни", "Дитячі іграшки"];

const Expenses = () => {
  const downloadPdf = async () => {
    const url = await getExportFile("pdf");

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "expenses.pdf";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
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
          <button type="button" className="bg-red-600 rounded p-1 px-5 font-bold text-white" onClick={downloadPdf}>
            PDF
          </button>
          <button type="button" className="bg-green-600 rounded p-1 px-5 font-bold text-white">
            XLS
          </button>
          <button type="button" className="border-2 border-cyan-500 rounded p-1 px-5">
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
