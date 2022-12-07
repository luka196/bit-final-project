import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Reports from "../../components/Reports/Reports";
import "./singleCandidatesPage.scss";
const SingleCandidatesPage = () => {
  return (
    <div className="singleCandidatesPage">
      <Header />
      <img
        src="https://cdn.britannica.com/31/182831-050-3F0A0CCE/Arnold-Schwarzenegger-title-character-Conan-the-Destroyer.jpg"
        alt="img"
      />
      <div className="info-div">
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
      <h2>Reports</h2>
      <div className="table">
        <div>Company</div>
        <div>Interview Date</div>
        <div>Status</div>
      </div>
      <Reports />
      <Reports />
      <Reports />
      <Footer />
    </div>
  );
};

export default SingleCandidatesPage;
