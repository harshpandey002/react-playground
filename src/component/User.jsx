import React from "react";

const User = ({ data }) => {
  console.log("Child Component");

  return (
    <div style={{ display: "flex" }}>
      <p>{data.name}</p>
      <p>{data.age}</p>
    </div>
  );
};

export default React.memo(User);
