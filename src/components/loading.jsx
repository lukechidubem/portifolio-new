import React from "react";

const Loading = ({ color }) => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // backgroundColor: background,
        color: color,
      }}
    >
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
