import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAllStudentsThunk } from '../reduxActions/fetchStudents';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AllStudents = () => {
  const listOfStudents = useSelector((state) => state.getStudents);
  const listOfCampuses = useSelector((state) => state.getCampuses);

  return (
    <div>
      <header className='student-header'>
        <h1>All students</h1>
      </header>
      
    <div className="card-container">
      {listOfStudents.map((item) => {
        // Find the corresponding campus for the student
        const campus = listOfCampuses.find((campus) => campus.id === item.campusId);

        return (
          
            <div key={item.id} className="student-card">

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
                {/* Display the Campus name, if a student is not found is will display "N/A" */}
                <div className="info-item">
                  <span className="info-label">Campus:</span>
                  <span className="info-value">{campus ? campus.name : 'N/A'}</span>
                </div>
              </span>
            </div>

        );
      })}
      <Link to="/addstudent" className="addstudent-link">
        Add Student
      </Link>
    </div>
    </div>
  );
};

export default AllStudents;
