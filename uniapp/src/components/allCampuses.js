import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCampusesThunk } from '../reduxActions/fetchCampuses'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SingleCampusInfo from './singleCampus';

const AllCampuses = () => {
    const dispatch = useDispatch()
    const listOfCampuses = useSelector(state => state.getCampuses )
    console.log("--> campuses",listOfCampuses)

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
          <div key={item.name} className="campus-card">
            <h1>{item.id}</h1>
            {/* This Link is set to navigate to the path of the 'SingleCampusInfo' component. 
              The `id` of the item is inserted into the URL, replacing the `:id` placeholder in the Route path. */}
            <Link to={`/singleCampus/${item.id}`} >View Details</Link>
            <p className="campus-address">Address: {item.address}</p>
            <img src={item.image} alt="Campus" className="campus-image" />
            <p className="campus-description">Description: {item.description}</p>
            
          </div>
        ))}
      </div>
    );
    
}
//{`/singleCampus/${item.id}`}

export default AllCampuses