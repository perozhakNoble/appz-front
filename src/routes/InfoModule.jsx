import React from "react";
import PageHeader from "../components/PageHeader";
import inf1 from "../images/inf1.jpeg";

const InfoModule = () => {
  return (
    <div className="w-full">
      <PageHeader text="Інформаційний модуль" />
      <div className="w-full flex justify-center">
        <img src={inf1} alt="inf1" className="w-1/2 mt-5" />
      </div>
    </div>
  );
};

export default InfoModule;
