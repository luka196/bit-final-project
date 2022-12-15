import React from "react";
import "./candidate.scss";

const Candidate = ({ data, setCandidate, isSelected, setMessage }) => {
  return (
    // <div
    //   className={`${isSelected ? "click" : ""} candidate`}
    //   onClick={() => {
    //     setCandidate(data);
    //     setMessage("");
    //   }}
    // >
    //   <img src={data?.avatar} alt="Image" />
    //   <div>
    //     <h2>{data?.name}</h2>
    //     <p>{data?.email}</p>
    //   </div>
    // </div>



<div  className={`${isSelected ? "click" : ""} card2`}
      onClick={() => {
        setCandidate(data);
        setMessage("");
      }}>
<div class="img">
<img src={data?.avatar} alt="Image" />
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(236,240,241,1)"></path></svg> */}
</div>
<span class="heading">{data?.name}</span>
<p className="email">
{data?.email}
</p>
</div>

  );
};

export default Candidate;
