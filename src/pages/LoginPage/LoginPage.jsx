import React, { useContext, useEffect, useState } from "react";
import "./loginPage.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../context";

const LoginPage = () => {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setToken } = useContext(dataContext);
  const { token } = useContext(dataContext);
  
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      fetchToken();
    }
  };

  function fetchToken() {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail,
        password: pass,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        } else {
          return res.json();
        }
      })
      .then((res) => {
        if (res.accessToken) {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken);
        }
      })
      .catch((err) => setErrorMessage(err?.message));
  }

  useEffect(() => {
    if (token) {
      history.push("/reports-page");
    }
  }, [token]);

  return (
    <div>
      <div className="loginPage">
        <Header />
        <div className="loginModal" onKeyDown={handleKeypress}>
          <h1>Welcome!</h1>
          <div>
            <span>Username:</span>
            <input onChange={(e) => setMail(e.target.value)} type="username" />
          </div>
          <div>
            Password:
            <input onChange={(e) => setPass(e.target.value)} type="password" />
          </div>
          <p>{errorMessage}</p>
          <button
            onClick={() => {
              fetchToken();
            }}
          >
            Log In
          </button>
        </div>
      </div>
      <div>
        <span>Password:</span>
        <input onChange={(e) => setPass(e.target.value)} type="password" />
      </div>

      <div>
        <span>Password:</span>
        <input onChange={(e) => setPass(e.target.value)} type="password" />
      </div>

      <p>{errorMessage}</p>

      <button
        onClick={() => {
          fetchToken();
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
