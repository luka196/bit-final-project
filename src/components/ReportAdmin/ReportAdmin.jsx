import React from "react";
import "./reportAdmin.scss";
import { ModalDelete } from "../../components/ModalDelete/ModalDelete";
const ReportAdmin = ({ data, setModalData, setIsDeleteModalOpen }) => {
  return (
    <div className="reportAdmin">
      <div>
        <p>{data?.companyName}</p>
        <span>Company</span>
      </div>
      <div>
        <p>{data?.candidateName}</p>
        <span>Candidate</span>
      </div>
      <div>
        <p>{data?.interviewDate.slice(4, 16)}</p>
        <span>Interview Date</span>
      </div>
      <div>
        <p>{data?.status}</p>
        <span>Status</span>
      </div>
      <div>
        <button className="detailsBtn" onClick={() => setModalData(data)}>
          <img
            className="viewBtn"
            src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915455_1280.png"
            alt=""
          />
        </button>
        <ModalDelete id={data?.id} />
      </div>
    </div>
  );
};

export default ReportAdmin;
