import React from 'react'
import { useSelector} from 'react-redux'
import { fetchAllStudentsThunk } from '../reduxActions/fetchStudents'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
const AllStudents = () => {
  
    const listOfStudents = useSelector(state => state.getStudents )
    console.log(listOfStudents)
    return (
      <div>
        <header className='header'>
          <h1>All Students</h1>
        </header>
          <Link to="/addstudent" className='addstudent-link'>Add Student</Link>
          
        <div className="card-container">
          {listOfStudents.map((item) => (
            <div key={item.id} className="cards">
              <img src={item.image} alt="Student" className="cards-image" />
              <span className="student-info">
                <div className="info-item">
                  <h3 className="info-label">First Name:{item.firstName}</h3>
                </div>
                <div className="info-item">
                  <h3 className="info-label">Last Name:{item.lastName}</h3>
                  <br/>
                  <Link to={`/singleStudent/${item.id}`} >View Details</Link>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
    
}

export default AllStudents;
