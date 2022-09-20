import React from "react";
import "./loading.css";

const Loading = ({ weight }) => {
  return (
    <div
      className="loading"
      style={{
        borderWidth: weight
      }}
    ></div>
  );
};

export default Loading;
