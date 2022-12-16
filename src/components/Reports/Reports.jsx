import React from "react";
import { ModalDetails } from "../ModalDetails/ModalDetails";
import "./reports.scss";

const Reports = ({ data, setModalData }) => {
  return (
    <div className="reports">
      <div>
        <div>{data.companyName}</div>
        <div>{data.interviewDate.slice(4, 16)}</div>
        <div>
          {data.status}{" "}
          <div className="eye">
            <button
              onClick={() => {
                setModalData(data);
              }}
            >
              <ModalDetails data={data} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
