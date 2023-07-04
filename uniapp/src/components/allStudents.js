import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {fetchAllStudentsThunk, removeStudentThunk} from '../reduxActions/fetchStudents'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
const AllStudents = () => {
    const dispatch=useDispatch();
    const listOfStudents = useSelector(state => state.getStudents )
    useEffect(() => {
      dispatch(fetchAllStudentsThunk());
      
    }, [dispatch]);


    const deleteStudent = (id) => {
      dispatch(removeStudentThunk(id));
    };


    
    console.log(listOfStudents)
    return (
      <div>
        <header className='header'>
          <h1>All Students</h1>
        </header>
          <Link to="/addstudent" className='add-link'>Add Student</Link>
          
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
                  <Link className='viewDetails-link' to={`/singleStudent/${item.id}`} >View Details</Link>
                  <p/>
                  {/* Remove Student */}
                  <button className='remove-Student' onClick={() => deleteStudent(item.id)}>Delete</button>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
    
}

export default AllStudents;
