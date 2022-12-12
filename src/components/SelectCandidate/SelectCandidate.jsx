import React, { useContext, useState } from "react";
import Candidate from "../Candidate/Candidate";
import Search from "../Search/Search";
import "./selectCandidate.scss";
import { dataContext } from "../../context";

const SelectCandidate = ({ setPage, selectedCandidate, setCandidate }) => {
  const { candidates } = useContext(dataContext);
  const [message, setMessage] = useState("");

  const nextClick = () => {
    if (selectedCandidate) setPage(2);
    else {
      setMessage("CANDIDATE IS NOT SELECTED !!!");
    }
  }

  return (
    <div className="selectCandidate">
      <Search />

      <div>
        {candidates.map((e) => (
          <Candidate
            data={e}
            key={e.id}
            isSelected={selectedCandidate?.id === e.id}
            setCandidate={setCandidate}
            setMessage={setMessage}
          />
        ))}
      </div>

      <div>
        <button className="btnWizard" onClick={nextClick}>
          NEXT
        </button>
        <p className="msg">{message}</p>
      </div>
    </div>
  );
};

export default SelectCandidate;
