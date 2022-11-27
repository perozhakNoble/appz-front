import React from "react";
import PageHeader from "../components/PageHeader";
import inc1 from "../images/income.jpeg";
import inc2 from "../images/income1.jpeg";

const CharityHelp = () => {
  return (
    <div className="w-full">
      <PageHeader text="Благодійна допомога" />
      <div className="w-full flex flex-col justify-center">
        <img src={inc1} alt="inc1" />
        <img src={inc2} alt="inc2" />
      </div>
    </div>
  );
};

export default CharityHelp;
