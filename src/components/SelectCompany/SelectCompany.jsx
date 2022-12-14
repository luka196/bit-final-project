import React, { useContext, useState } from "react";
import Search from "../Search/Search";
import "./selectCompany.scss";
import { dataContext } from "../../context";

const SelectCompany = ({ setPage, setCompany, selectedCompany, candidate,filterReportsByCandidateAndCompany }) => {
  const { companies, reports } = useContext(dataContext);
  const [message, setMessage] = useState("");
  const [searchString, setSearchString] = useState("");
  const filterCompanies = companies.filter((can) =>
    can?.name?.toLowerCase().includes(searchString.toLowerCase())
  );

  const nextClick = () => {
    if (selectedCompany) setPage(3);
    else setMessage("COMPANY IS NOT SELECTED !!!");
  };

  return (
    <div className="selectCompany">
      <Search setSearchString={setSearchString} searchString={searchString} />

      {filterCompanies.map((e) => (
        !(filterReportsByCandidateAndCompany(reports,candidate,e).find((r)=>(
          r?.phase==='final' || r?.status==='declined'
        ))) && 
        <div
          key={e.id}
          className={`${
            selectedCompany?.name === e.name ? "click" : ""
          } company`}
          onClick={() => {
            setCompany(e);
            setMessage("");
          }}
        >
          {e.name}
        </div>
      ))}

      <div>
        <button className="btnWizard" onClick={() => setPage(1)}>
          BACK
        </button>
        <div className="btn-msg">
          <button className="btnWizard" onClick={nextClick}>
            NEXT
          </button>
          <p className="msg">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
