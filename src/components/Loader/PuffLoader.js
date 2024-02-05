import React from "react";
import { Puff } from "react-loader-spinner";

const PuffLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <p style={{ position: "absolute" }}>Loading</p>
      <Puff
        height="150"
        width="150"
        radius={8}
        color="#43a7ff"
        ariaLabel="puff-loading"
        wrapperStyle={{ margin: "0 auto" }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default PuffLoader;
