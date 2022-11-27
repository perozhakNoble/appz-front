import React from "react";
import PageHeader from "../components/PageHeader";
import com1 from "../images/com1.jpeg";

const CommunicateModule = () => {
  return (
    <div className="w-full">
      <PageHeader text="Комунікаційний модуль" />
      <div className="w-full flex justify-center">
        <img src={com1} alt="com1" className="w-3/4 mt-8 " />
      </div>
    </div>
  );
};

export default CommunicateModule;
