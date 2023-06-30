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

    return(
      <div>
       {
    listOfStudents.map((item) => (
      <div key={item.id}>
        {item.firstName}
        {item.lastName}
      </div>
    ))
  }
  <Link to = "/addstudent">Add Student</Link>
      </div>
    );

}

export default AllStudents;