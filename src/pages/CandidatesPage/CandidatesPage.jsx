import React from "react";
import Candidate from "../../components/Candidate/Candidate";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import "./candidatesPage.scss";
const CandidatesPage = () => {
  return (
    <>
      <div className="candidatesPage">
        <Header />

        <div id="candidate">
          <h2>Candidates</h2>
          <Search />
        </div>  
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
        <Footer />
      </div>
    </>
  );
};

export default CandidatesPage;
