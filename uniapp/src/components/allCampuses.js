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
        <header className='header'>
        <h1>All Campuses</h1>
        </header>
        <Link to="/addCampus" className='add-link'>Add Campus</Link>

        <div className="card-container">
        {listOfCampuses.map((item) => (
          <div key={item.name} className="cards">
            <img src={item.image} alt="Campus" className="cards-image" />
            <div className="info-item">
            <h2>{item.id}</h2>
            </div>
            {/* This Link is set to navigate to the path of the 'SingleCampusInfo' component. 
              The `id` of the item is inserted into the URL, replacing the `:id` placeholder in the Route path. */}
            <Link className='viewDetails-link' to={`/singleCampus/${item.id}`} >View Details</Link>
          </div>
        ))}
        </div>
      </div>
    );
    
}
//{`/singleCampus/${item.id}`}

export default AllCampuses