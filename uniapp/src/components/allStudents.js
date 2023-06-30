
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllStudentsThunk } from '../reduxActions/fetchStudents'
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
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>
    ))
  }
      </div>
    );
      
}

export default AllStudents;