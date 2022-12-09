import React, { useState } from "react";
import "./candidate.scss";
const Candidate = ({ data, setCandidate, isSelected }) => {
  // const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`${isSelected ? "click" : ""} candidate`}
      onClick={() => {
        setCandidate(data);

      }}
    >
      <img src={data?.avatar} alt="Image" />
      <div>
        <h2>{data?.name}</h2>
        <p>{data?.email}</p>
      </div>
    </div>
  );
};

export default Candidate;
