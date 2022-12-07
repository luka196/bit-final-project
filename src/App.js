import React, { useState, useEffect } from 'react'
import './App.css';
import CandidatesPage from './pages/CandidatesPage/CandidatesPage';
import CreateReportsPage from './pages/CreateReportsPage/CreateReportsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReportsPage from './pages/ReportsPage/ReportsPage';
import SingleCandidatesPage from './pages/SingleCandidatesPage/SingleCandidatesPage';
import { Switch, Route } from "react-router-dom"
import { DataProvider } from "./context"


function App() {
  const [candidates, setCandidates] = useState([])
  const [companies, setCompanies] = useState([])
  const [reports, setReports] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3333/664/api/candidates")
      .then(res => res.json())
      .then(res => setCandidates(res))

      fetch("http://localhost:3333/664/api/companies")
      .then(res => res.json())
      .then(res => setCompanies(res))

      fetch("http://localhost:3333/664/api/reports")
      .then(res => res.json())
      .then(res => setReports(res))

      fetch("http://localhost:3333/444/api/users")
      .then(res => res.json())
      .then(res => setUsers(res))
  }, [])

  console.log(candidates,companies,reports,users)

  return (
    <DataProvider value={{candidates}}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <CandidatesPage />
          </Route>
          <Route path="/single-candidates-page/:id">
            <SingleCandidatesPage />
          </Route>
          <Route path="/login-page">
            <LoginPage />
          </Route>
          <Route path="/reports-page">
            <ReportsPage />
          </Route>
          <Route path="/create-reports-page">
            <CreateReportsPage />
          </Route>
        </Switch>
      </div>
    </DataProvider>
  );
}

export default App;
