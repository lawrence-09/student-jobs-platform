
import './App.css';
                    

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EmployerDashboard from './pages/EmployerDashboard';
import StudentDashboard from './pages/StudentDashboard';
import JobListing from './pages/JobListing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/job/:id" element={<JobListing />} />
      </Routes>
    </Router>
  );
}

export default App;
