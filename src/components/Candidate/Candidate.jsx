import React from "react";
import "./candidate.scss";

const Candidate = ({ data, setCandidate, isSelected, setMessage }) => {
 
  return (
    <div
      className={`${isSelected ? "click" : ""} candidate`}
      onClick={() => {
        setCandidate(data);
         setMessage("");
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
