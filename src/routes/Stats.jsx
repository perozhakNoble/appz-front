import { CurrencyDollarIcon, GiftIcon, ScaleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
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
            color: "bg-indigo-500 shadow-indigo-500/50",
            icon: <CurrencyDollarIcon className="w-16 mt-10 ml-auto text-white" />,
          },
          {
            title: "Надходження",
            link: "incomings",
            color: "bg-blue-500 shadow-blue-500/50",
            icon: <ScaleIcon className="w-16 mt-10 ml-auto text-white" />,
          },
          {
            title: "Благодійна допомога",
            link: "charity",
            color: "bg-cyan-500 shadow-cyan-500/50",
            icon: <GiftIcon className="w-16 mt-10 ml-auto text-white" />,
          },
          {
            title: "По окремому користувачу",
            link: "by-user",
            color: "bg-green-500 shadow-green-500/50",
            icon: <UserGroupIcon className="w-16 mt-10 ml-auto text-white" />,
          },
        ].map((module, idx) => (
          <Link to={"/" + module.link} key={idx} className="cursor-pointer w-[45%] h-64 hover:scale-105 transition-all">
            <div className={`rounded ${module.color}  shadow-lg p-6  w-full h-full`}>
              <h3 className="text-white text-2xl">{module.title}</h3>
              {module.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stats;
