import React, { useEffect, useState } from 'react'
import "./loginPage.scss"
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'
import { useHistory } from "react-router-dom";
import { DataProvider } from "../../context"

const LoginPage = () => {
    const history = useHistory();
    const [token, setToken] = useState({})

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    function changePage() {
        if (token.accessToken) {
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
                typeof res === "string" ? setErrorMessage(res) :  setRefresh(true) || setToken(res.accessToken) 
            })
            .catch(err => console.log(err))


    }
    useEffect(() => {
        changePage()
    }, [refresh])

    return (
        <DataProvider value={{token}}>
        <div className="loginPage">
            <Header />
            <div>
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
        </DataProvider>
    )
}

export default LoginPage
