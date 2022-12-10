import React from "react";
import Candidate from "../../components/Candidate/Candidate";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";

import "./candidatesPage.scss";

const CandidatesPage = ({candidates}) => {
  return (
    <div className="candidatesPage">
      <Header />
      <div id="candidate">
        <h2>Candidates</h2>
        <Search />
      </div>
      {candidates?.map((e) => (
        <Link key={e.id} to={`/candidates/${e.id}`}>
          <Candidate setCandidate={() => {}} data={e} />
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default CandidatesPage;
