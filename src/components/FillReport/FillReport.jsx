import React, { useState, useContext } from "react";
import "./fillReport.scss";

const FillReport = ({ setPage, candidate, company }) => {
  const { token } = useContext(dataContext);
  // const token = localStorage.getItem("token");
  const [submitFail, setSubmitFail] = useState("");
  const { setUpdateReports } = useContext(dataContext);
  const { updateReports } = useContext(dataContext);
  const newReport = {
    candidateId: candidate?.id,
    candidateName: candidate?.name,
    companyId: company?.id,
    companyName: company?.name,
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  };

  function submitReport() {
    if (
      newReport.interviewDate !== "" &&
      newReport.phase !== "" &&
      newReport.status !== ""
    ) {
      fetch("http://localhost:3333/664/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newReport),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Success:", result);
          setUpdateReports(!updateReports)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setSubmitFail("Please select all fields");
    }
  }

  return (
    <div className="fillReport">
      <div>
        <div>
          <p>Date:</p>

          <input
            type="date"
            onChange={(e) => {let date = new Date(e.target.value) ; date = date.toString() ; newReport.interviewDate = date
            }}
          />
        </div>
        <div>
          <label>Phase:</label>

          <select
            name="phase"
            id="phase"
            onChange={(e) => (newReport.phase = e.target.value)}
            defaultValue="-select-"
          >
            <option value="-select-" disabled >
              -select-
            </option>

            <option value="cv">CV</option>
            <option value="hr">HR</option>
            <option value="technical">Technical</option>
            <option value="final">Final</option>
          </select>
        </div>
        <div>
          <label>Status:</label>

          <select
            name="status"
            id="status"
            defaultValue="-select-"
            onChange={(e) => (newReport.status = e.target.value)}
          >
            <option value="-select-" disabled >
              -select-
            </option>
            <option value="passed">Passed</option>
            <option value="declined">Declined</option>
          </select>
        </div>
      </div>
      <div className="notes">
        <p>Notes:</p>
        <textarea
          type="textarea"
          onChange={(e) => (newReport.note = e.target.value)}
        />
      </div>
      <div className="btn-msg">
        <button className="btnWizard" onClick={() => setPage(2)}>
          BACK
        </button>
        <div >
          <button
            className="btnWizard"
            onClick={() => {
              submitReport();
             
    
              console.log(token);
            }}
            >
            SUBMIT
          </button>
            <p className="msg">{submitFail}</p>
        </div>
      </div>
    </div>
  );
};

export default FillReport;
