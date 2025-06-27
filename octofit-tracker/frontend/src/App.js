

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import octofitLogo from './assets/octofitapp-small.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 octofit-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={octofitLogo} alt="OctoFit Logo" height="48" className="octofit-logo" style={{background: 'white', borderRadius: '8px', padding: '2px'}} />
            <span className="fw-bold fs-3 octofit-title">OctoFit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow text-center">
              <div className="card-body">
                <h1 className="display-4 text-primary mb-3">Welcome to OctoFit Tracker!</h1>
                <p className="lead">Track your activities, workouts, teams, and more for Mergington High School.</p>
                <div className="d-flex justify-content-center gap-2 mt-4">
                  <Link to="/activities" className="btn btn-primary btn-lg">View Activities</Link>
                  <Link to="/leaderboard" className="btn btn-success btn-lg">Leaderboard</Link>
                  <Link to="/teams" className="btn btn-info btn-lg">Teams</Link>
                  <Link to="/users" className="btn btn-warning btn-lg">Users</Link>
                  <Link to="/workouts" className="btn btn-danger btn-lg">Workouts</Link>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
