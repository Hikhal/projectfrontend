import React,{useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCampusesCustomThunk } from '../reduxActions/fetchCampuses';


function Form() {
    const dispatch=useDispatch();
    const [name,setName]=useState("")

    function handleSubmit(event){
        event.preventDefault();
        dispatch(fetchAllCampusesCustomThunk(name));
    }

    function handleChange(event){
        event.preventDefault();
        setName(name+event.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Campus/Student' onChange={handleChange}></input>
            <button type='submit'></button>
        </form>
    </div>
  )
}

export default Form