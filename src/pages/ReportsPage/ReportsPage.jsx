import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ReportAdmin from "../../components/ReportAdmin/ReportAdmin";
import Search from "../../components/Search/Search";
import { useLocation } from "react-router-dom";
import { dataContext } from "../../context";
import "./reportsPage.scss";

const ReportsPage = () => {
  const { reports } = useContext(dataContext);


  const location = useLocation();
  const [searchString, setSearchString] = useState("");
  const filterCandidates = reports.filter((can) =>
    can?.candidateName?.toLowerCase().includes(searchString.toLowerCase())
  );

  console.log(location.state);
  
  return (
    <div className="reportsPage">
      <Header />
      <Search setSearchString={setSearchString} searchString={searchString} />
      {filterCandidates?.reverse()?.map((e) => (
        <ReportAdmin
          data={e}
          key={e.id}
        />
      ))}

      <Footer />
    </div>
  );
};

export default ReportsPage;
