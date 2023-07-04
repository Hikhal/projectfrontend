import React, {useState, useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { updateStudentThunk } from '../reduxActions/updateStudent'
import { fetchAllStudents } from '../reduxActions/fetchStudents'

const UpdateStudent = ({prevStudentInfo}) => {
    const listStudents = useSelector(state => state.getStudents)
    console.log(prevStudentInfo)
    const dispatch = useDispatch()
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        image: '',
        email: '',
        gpa: '',
    })

    // Use useEffect to update studentData when prevStudentInfo changes
    useEffect(() => {
        setStudentData({...prevStudentInfo})
    }, [prevStudentInfo])

     // The handleChange function is an event handler that gets triggered when the input fields change.
     const handleChange = (event) => {
        const {name, value} = event.target
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const url = `http://localhost:8080/api/students/update/${prevStudentInfo.id}`
        dispatch(updateStudentThunk(url, studentData))
    }

   

    return (
        <div>
            <h2>Update Student</h2>
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={studentData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={studentData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={studentData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={studentData.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={studentData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        GPA:
        <input
          type="text"
          name="gpa"
          value={studentData.gpa}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='update-stu' type="submit">Update</button>
    </form>
        </div>
    )
}
export default UpdateStudent