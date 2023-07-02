import React from 'react'
import { useSelector} from 'react-redux'
import { fetchAllStudentsThunk } from '../reduxActions/fetchStudents'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
const AllStudents = () => {
  
    const listOfStudents = useSelector(state => state.getStudents )
    console.log(listOfStudents)
    return (
      <div className="card-container">
        {listOfStudents.map((item) => (
          <div key={item.id} className="student-card">
            <Link to={`/singleStudent/${item.id}`} >View Details</Link>
            <img src={item.image} alt="Student" className="student-image" />
            <span className="student-info">
              <div className="info-item">
                <span className="info-label">First Name:</span>
                <span className="info-value">{item.firstName}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Last Name:</span>
                <span className="info-value">{item.lastName}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Address:</span>
                <span className="info-value">{item.address}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{item.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">GPA:</span>
                <span className="info-value">{item.gpa}</span>
              </div>
            </span>
          </div>
        ))}
        <Link to="/addstudent" className='addstudent-link'>Add Student</Link>
      </div>
    );
    
}

export default AllStudents;