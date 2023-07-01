import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllStudentsThunk } from '../reduxActions/fetchStudents'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
const AllStudents = () => {
    const dispatch = useDispatch()
    const listOfStudents = useSelector(state => state.getStudents )
    console.log(listOfStudents)

    useEffect(()=>{
      dispatch(fetchAllStudentsThunk())
      return () => {
        dispatch({type: "CLEAR_ALL_STATES"})
      }
    }, [dispatch])

    return (
      <div className="card-container">
        {listOfStudents.map((item) => (
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
        <Link to="/addstudent">Add Student</Link>
      </div>
    );
    
}

export default AllStudents;