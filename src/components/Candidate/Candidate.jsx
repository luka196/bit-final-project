import React from "react";
import "./candidate.scss";

const Candidate = ({ data, setCandidate, isSelected, setMessage }) => {
  return (
    <div
      className={`${isSelected ? "click" : ""} card2`}
      onClick={() => {
        setCandidate(data);
        setMessage("");
      }}
    >
      <div class="img">
        <img className="card-img" src={data?.avatar} alt="Image" />
      </div>
      <div className="heading-email">
        <span class="heading">{data?.name}</span>
        <p className="email">{data?.email}</p>
      </div>
    </div>
  );
};

export default Candidate;
