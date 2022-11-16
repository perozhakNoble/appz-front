import React from "react";

const ErrorMessage = ({ error = "" }) => {
  if (error) return <div className="text-lg text-red-600 m-2">{error.message}</div>;

  return <></>;
};

export default ErrorMessage;
