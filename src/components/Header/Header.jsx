import React, { useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { dataContext } from "../../context";

const Header = () => {
  const { token, setToken } = useContext(dataContext);

  return (
    <div className="header">
      <h1>Bit project</h1>
      <div>
        <button id="btn-candidates">
          <Link to="/">Candidates</Link>
        </button>
        {token && (
          <button id="btn-rep">
            <Link to="/reports-page">Reports</Link>
          </button>
        )}
        {token && (
          <button id="btn-crrep">
            <Link to="/create-reports-page">Create Report</Link>
          </button>
        )}
        {!token && (
          <button id="btn-login">
            <Link to="/login-page">Log In</Link>
          </button>
        )}
        {token && (
          <button id="btn-logout">
            {/* NE BRISASTI!!! RED IZNAD I RED ISPOD SE TOGLUJU KAD HOCEMO DA ISKLJUCIMO FUNKCIONALNOST LOG OUTA!!! */}
            {/* {token && <button id="btn-logout" onClick={() => {setToken("")}}> */}

            <Link to="/">Log Out</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
