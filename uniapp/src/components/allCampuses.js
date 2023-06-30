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

    return(
        <div>
           <Link to="/addCampus">Add Campus</Link>
         {
      listOfCampuses.map((item) => (
        <div>
          <h1 key = {item.id}> {item.name}</h1>
          {/* <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre> */}
        </div>
      ))
    }
        </div>
      );
}

export default AllCampuses