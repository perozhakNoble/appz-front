import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Stats = () => {
  return (
    <div>
      <PageHeader text="Статистика" />
      <div className="flex flex-wrap mt-10 justify-around gap-y-12">
        {[
          {
            title: "Витрати",
            link: "expenses",
            color: "indigo",
          },
          {
            title: "Надходження",
            link: "incomings",
            color: "blue",
          },
          {
            title: "Благодійна допомога",
            link: "charity",
            color: "cyan",
          },
          {
            title: "По окремому користувачу",
            link: "by-user",
            color: "green",
          },
        ].map((module, idx) => (
          <Link to={"/" + module.link} className="cursor-pointer w-[45%] h-64 hover:scale-105 transition-all">
            <div
              className={`rounded bg-${module.color}-500 shadow-${module.color}-500/50  shadow-lg p-6  w-full h-full`}
            >
              <h3 className="text-white text-2xl">{module.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stats;
