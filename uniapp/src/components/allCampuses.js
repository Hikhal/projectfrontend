import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCampusesThunk } from '../reduxActions/fetchCampuses'
const AllCampuses = () => {
    const dispatch = useDispatch()
    const listOfCampuses = useSelector(state => state.getCampuses )
    console.log(listOfCampuses)

    useEffect(()=>{
      dispatch(fetchAllCampusesThunk())
      return () => {
        dispatch({type: "CLEAR_ALL_STATES"})
      }
    }, [dispatch])

    return(
        <div>
         {
      listOfCampuses.map((item) => (
        <div key={item.id}>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))
    }
        </div>
      );
}

export default AllCampuses