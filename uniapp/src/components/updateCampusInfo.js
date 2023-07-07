import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { updateCampusThunk } from '../reduxActions/updateCampus'


const UpdateCampus = ({previousCampusInfo, updateCampus}) => {
    //const listCampuses = useSelector(state => state.getStudents)

    const dispatch = useDispatch()
    const [campusData, setcampusData] = useState({
        name: '',
        address: '',
        image: '',
        description: ''
    })

    // Use useEffect to update campusData when prevCampusData changes
    useEffect(() => {
        setcampusData({...previousCampusInfo})
    }, [previousCampusInfo])

     // The handleChange function is an event handler that gets triggered when the input fields change.
     const handleChange = (event) => {
        const {name, value} = event.target
        setcampusData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/campuses/update/${previousCampusInfo.id}`
        dispatch(updateCampusThunk(url, campusData))
        updateCampus(campusData)
    }

   

    return (
        <div className='update'>
            <h2>Update Cammpus</h2>
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Campus Name:
        <input
          type="text"
          name="name"
          value={campusData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={campusData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={campusData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="img"
          value={campusData.img}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='update-stu' type="submit">Update </button>
    </form>
        </div>
    )
}
export default UpdateCampus