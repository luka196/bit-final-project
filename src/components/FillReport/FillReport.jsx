import React, { useState, useContext } from "react";
import { dataContext } from "../../context";
import "./fillReport.scss";
import { useHistory } from "react-router-dom";
const FillReport = ({
  setPage,
  candidate,
  company,
  filterReportsByCandidateAndCompany,
}) => {
  const history = useHistory();
  const { token, reports } = useContext(dataContext);
  // const token = localStorage.getItem("token");
  const [submitFail, setSubmitFail] = useState("");
  const { setUpdateReports } = useContext(dataContext);
  const { updateReports } = useContext(dataContext);
  const array = filterReportsByCandidateAndCompany(reports, candidate, company);
  const phase = (() => {
    let phase;
    if (array.length === 0) {
      phase = "cv";
    } else if (array.find((e) => (e.phase === "tech"))) {
      phase = "final";
    } else if (array.find((e) => (e.phase === "hr"))) {
      phase = "tech";
    } else if (array.find((e) => (e.phase === "cv"))) {
      phase = "hr";
    }
    return phase;
  })(array);
  console.log(phase,array)
  // const phases = ["cv", "hr", "tech", "final"];
  // const phase = phases[array.length];

  const newReport = {
    candidateId: candidate?.id,
    candidateName: candidate?.name,
    companyId: company?.id,
    companyName: company?.name,
    interviewDate: "",
    phase,
    status: "",
    note: "",
  };

  console.log(3);
  function submitReport() {
    if (
      newReport.interviewDate !== "" &&
      // newReport.phase !== "" &&
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
          setUpdateReports(!updateReports);
          history.push("/reports-page", { createdReport: true });
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
            onChange={(e) => {
              let date = new Date(e.target.value);
              date = date.toString();
              newReport.interviewDate = date;
            }}
          />
        </div>
        <div>
          <label>Phase:</label>

          <p className="inputPhase">{phase}</p>
        </div>
        <div>
          <label>Status:</label>

          <select
            name="status"
            id="status"
            defaultValue="-select-"
            onChange={(e) => (newReport.status = e.target.value)}
          >
            <option value="-select-" disabled>
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
        <div>
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
