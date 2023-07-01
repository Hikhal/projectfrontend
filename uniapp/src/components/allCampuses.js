import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCampusesThunk } from '../reduxActions/fetchCampuses'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const AllCampuses = () => {
    const dispatch = useDispatch()
    const listOfCampuses = useSelector(state => state.getCampuses )
    console.log("--> campuses",listOfCampuses[0])

    useEffect(()=>{
      dispatch(fetchAllCampusesThunk())
      return () => {
        dispatch({type: "CLEAR_ALL_STATES"})
      }
    }, [dispatch])

    return (
      <div>
        <Link to="/addCampus" className='addcampus-link'>Add Campus</Link>
        {listOfCampuses.map((item) => (
          <div key={item.id} className="campus-card">
            <h1>{item.name}</h1>
            <p className="campus-address">Address: {item.address}</p>
            <img src={item.image} alt="Campus" className="campus-image" />
            <p className="campus-description">Description: {item.description}</p>
          </div>
        ))}
      </div>
    );
    
}

export default AllCampuses