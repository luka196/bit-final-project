import React, { useContext, useEffect, useState } from 'react'
import "./loginPage.scss"
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'
import { useHistory } from "react-router-dom";
import { dataContext } from "../../context";


const LoginPage = () => {
    const history = useHistory();
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const { setToken } = useContext(dataContext)
    const { token } = useContext(dataContext)
    function changePage() {

        if (token) {
            history.push("/reports-page")

        }
        console.log(token)
    }
    function fetchToken() {
        fetch("http://localhost:3333/login", {
            "method": "POST",
            "headers": {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify({
                "email": mail,
                "password": pass
            })

        })
            .then(res => res.json())
            .then(res => {
                console.log(res, 'login')
                typeof res === "string" ? setErrorMessage(res) : setRefresh(true);
                if (res.accessToken) {
                    localStorage.setItem("token", res.accessToken);
                    setToken(res.accessToken);
                }
            })
            .catch(err => console.log(err))

    }
    useEffect(() => {
        // changePage()

        if (token) {
            history.push("/reports-page")

        }
    }, [token])

    return (

        <div className="loginPage">
            <Header />
            <div className='loginModal'>
                <h1>Log In</h1>
                <div>Username:
                    <input onChange={e => setMail(e.target.value)} type="username" />
                </div>
                <div>Password:
                    <input onChange={e => setPass(e.target.value)} type="password" />
                </div>
                <p>{errorMessage}</p>
                <button onClick={() => { fetchToken(); }}>
                    Log In
                </button>
            </div>
        </div>

    )
}

export default LoginPage
