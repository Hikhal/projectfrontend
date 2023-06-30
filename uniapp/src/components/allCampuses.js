import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCampusesThunk } from '../reduxActions/fetchCampuses'
const AllCampuses = () => {
    const dispatch = useDispatch()
    const listOfCampuses = useSelector(state => state.getCampuses )
    console.log(listOfCampuses)

    useEffect(()=>{
      dispatch(fetchAllCampusesThunk())
    }, [dispatch])

    return(
        <div>
      {listOfCampuses.map((item) => (
        <div key={item.id}>
          {/* Render the content from the item object */}
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {/* Add additional content as needed */}
        </div>
      ))}
    </div>
  );
}

export default AllCampuses