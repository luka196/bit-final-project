import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Reports from "../../components/Reports/Reports";
import "./singleCandidatesPage.scss";
import Modal from "../../components/Modal/Modal";
import ModalDetails from "../../components/ModalDetails/ModalDetails";
import { dataContext } from "../../context";
import { useRouteMatch } from "react-router-dom";

const SingleCandidatesPage = () => {
  const { candidates } = useContext(dataContext);
  const { reports } = useContext(dataContext);
  const [modalData, setModalData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const match = useRouteMatch();
  const singleCandidate = candidates?.find((e) => e.id == match.params.id);
  const singleCandidateReports = reports?.filter(
    (e) => e.candidateId == match.params.id
  );

  return (
    <div className="singleCandidatesPage">
      <Header />
      <img src={singleCandidate?.avatar} alt="Image unavailable" />
      <div className="info-div">
        <Info data={singleCandidate?.name} title="Name:" />
        <Info
          data={singleCandidate?.birthday.slice(4, 16)}
          title="Date of birth:"
        />
        <Info data={singleCandidate?.email} title="Email:" />
        <Info data={singleCandidate?.education} title="Education:" />
      </div>
      <h2>Reports:</h2>
      <div className="table">
        <div>🠟 Company</div>
        <div>🠟 Interview Date</div>
        <div>🠟 Status</div>
      </div>

      {singleCandidateReports?.map((e) => (
        <Reports
          data={e}
          setModalData={setModalData}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          key={e.id}
        />
      ))}
      <Modal isOpenModal={modalData} closeModal={() => setModalData(null)}>
        <ModalDetails data={modalData} />
      </Modal>

      <Footer />
    </div>
  );
};

export default SingleCandidatesPage;
