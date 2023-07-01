
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllCampuses from './components/allCampuses';
import AllStudents from './components/allStudents';
import AddStudent from './components/addstudent';
import AddCampus from './components/addCampus';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="sidebar">
          <span class ="expand-btn">
            <img src="assests/chevron.svg" alt="Chevron" />
          </span>
          <div class ="sidebar-links">
              <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allCampuses">All Campuses</Link>
            </li>
            <li>
              <Link to="/allStudents">All Students</Link>
            </li>
          </ul>
            </div>
        </nav>
        <div className="content">
          {/* <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/allCampuses">All Campuses</Link>
            <Link to="/allStudents">All Students</Link>
          </nav> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allCampuses" element={<AllCampuses />} />
            <Route path="/allStudents" element={<AllStudents />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addCampus" element={<AddCampus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
