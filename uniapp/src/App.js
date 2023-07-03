
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllCampuses from './components/allCampuses';
import AllStudents from './components/allStudents';
import AddStudent from './components/addstudent';
import AddCampus from './components/addCampus';
import SingleCampusInfo from './components/singleCampus';
import SingleStudentInfo from './components/singleStudent';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchAllStudentsThunk } from './reduxActions/fetchStudents';
import { fetchAllCampusesThunk } from './reduxActions/fetchCampuses';
import UpdateStudent from './components/updateStudentInfo';


const App = () => {
  // we would want the state to update as we mount the App so that we could
  // use that data elsewhere in our components without having the need to dispatch the actions
  // inside every component.
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllStudentsThunk());
    dispatch(fetchAllCampusesThunk())
    return () => {
      dispatch({type: "CLEAR_ALL_STATES"})
     }
    
  }, [dispatch]);
  
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
              <Link to="/allCampuses">Campuses</Link>
            </li>
            <li>
              <Link to="/allStudents">Students</Link>
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
            {/* This Route contains a dynamic segment (the `:id` part). It is a placeholder for 
              the actual value that will be part of the URL when navigating to the 'SingleCampusInfo' route. */}
            <Route path="/singleCampus/:id" element={<SingleCampusInfo />} />
            <Route path="/singleStudent/:id" element={<SingleStudentInfo />} />
            <Route path="/updateStudent/:id" element={<UpdateStudent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
