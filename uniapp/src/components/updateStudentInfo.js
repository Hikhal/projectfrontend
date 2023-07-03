import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateStudentThunk } from '../reduxActions/updateStudent'

const UpdateStudent = ({prevStudentInfo}) => {
    const dispatch = useDispatch()
    const [studentData, setStudentData] = useState({prevStudentInfo
    })

     // The handleChange function is an event handler that gets triggered when the input fields change.
    const handleChange = (event) => {
        const {name, value} = event.target

        setStudentData((prevStudentInfo) => ({
            ...prevStudentInfo, [name]:value
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
      <button type="submit">Update</button>
    </form>
        </div>
    )
}
export default UpdateStudent