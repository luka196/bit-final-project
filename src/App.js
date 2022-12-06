import './App.css';
import CandidatesPage from './pages/CandidatesPage/CandidatesPage';
import CreateReportsPage from './pages/CreateReportsPage/CreateReportsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReportsPage from './pages/ReportsPage/ReportsPage';
import SingleCandidatesPage from './pages/SingleCandidatesPage/SingleCandidatesPage';

function App() {
  return (
    <div>
      app
      <CandidatesPage/>
      <SingleCandidatesPage/>
      <LoginPage/>
      <ReportsPage/>
      <CreateReportsPage/>
      </div>
    
  );
}

export default App;
