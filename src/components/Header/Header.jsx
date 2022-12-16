import React, { useContext } from "react";
import "./header.scss";
import { Link, useHistory , useLocation} from "react-router-dom";
import { dataContext } from "../../context";

const Header = () => {
  const { token, setToken } = useContext(dataContext);
  const history = useHistory();
  const logOut = () => {
    setToken("");
    history.push("/candidates");
  };

  return (
    <div className="header">
      <h1 className="interviewsReports">Interviews Reports</h1>
      <h1 className="reportsAdministration">Reports Administration</h1>
      <h1 className="logInTitle">Log In</h1>
      <div>
        <Link id="btn-candidates" className="headerNavItem" to="/candidates">
          Candidates
        </Link>

        {token ? (
          <>
            <Link className="headerNavItem" id="btn-rep" to="/reports">
              Reports
            </Link>

            <Link
              id="btn-crrep"
              className="headerNavItem"
              to="/create-reports"
            >
              Create Report
            </Link>
            <button className="headerNavItem" id="btn-logout" onClick={logOut}>
              Log out
            </button>
          </>
        ) : (
          <Link className="headerNavItem" id="btn-login" to="/login">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
