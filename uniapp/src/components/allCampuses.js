import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCampusesThunk } from '../reduxActions/fetchCampuses'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import SingleCampusInfo from './singleCampus';

const AllCampuses = () => {
    const listOfCampuses = useSelector(state => state.getCampuses )
    console.log("--> campuses",listOfCampuses)


    return (
      <div>
        <header className='campus-header'>
        <h1>All Campuses</h1>
        </header>
        <Link to="/addCampus" className='addcampus-link'>Add Campus</Link>
        {listOfCampuses.map((item) => (
          <div key={item.name} className="campus-card">
            <h1>{item.id}</h1>
            {/* This Link is set to navigate to the path of the 'SingleCampusInfo' component. 
              The `id` of the item is inserted into the URL, replacing the `:id` placeholder in the Route path. */}
            <img src={item.image} alt="Campus" className="campus-image" />
            <p className="campus-description">Enrollment count: {}</p>
            <Link to={`/singleCampus/${item.id}`} >View Details</Link>
          </div>
        ))}
      </div>
    );
    
}
//{`/singleCampus/${item.id}`}

export default AllCampuses