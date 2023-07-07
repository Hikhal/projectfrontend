import React, { useState} from 'react'
import { useDispatch, } from 'react-redux';
import {addStudentThunk} from '../reduxActions/addStudent'
import { useNavigate } from 'react-router-dom';
//import { addStudentThunk } from '../reduxActions/addStudent'

/**
 * The component contains an input field for each attribute of a student (first name, last name, address, image, email, and GPA). 
 * It uses React hooks to maintain state for each of these fields and updates these state variables whenever the corresponding input field changes.
 *  When the form is submitted, it creates a new student object with the current values of the input fields
 *  and sends a POST request to add this student to a database. 
 * After submitting, it clears the input fields.
 */

// -- passing in a campusID prop so that when needed the student is assigned to a campus as well.
const AddStudent = ({campusid}) => {
    const navigate = useNavigate()
    const dispatch=useDispatch();
    const [firstName, setfirstname] = useState("")
    const [lastName, setlastname] = useState("")
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    const [gpa, setgpa] = useState("")
    const [newstudent,setnewstudent] = useState("")


    // Each of these functions are called when the corresponding input field value changes
    // They update the state variable to reflect the current input value
    const setFirstName = (event) =>{
        setfirstname(event.target.value)
    }
    const setLastName = (event) =>{
        setlastname(event.target.value)
    }
    const setAddress = (event) => {
       setaddress(event.target.value)
    }
    const setEmail = (event) => {
        setemail(event.target.value)
     }
    const setImage = (event) => {
        setimage(event.target.value)
     }
    const setGPA = (event) =>{
        setgpa(event.target.value)
     }
     const HandleSubmit = async (event) => {
        // This prevents the default form submission behavior
        event.preventDefault();
        // //name.trim() will return a falsey value if the the name is only whitespace or empty
        // if (!firstName.trim() || !lastName) {
        //     alert('First Name and Last Name are required');
        //     return;
        // }

        // // Only aplha numerical and spaces are allowed
        // const nameRegex = /^[A-Za-z0-9\s]+$/;
        // if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        //     alert('Name should contain only alphabets');
        //     return;
        // }

        // //Image is Required
        // if (!image){
        //     alert("Image is Required")
        //     return;
        // }

        // const emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        // if (!emailRegEx.test(email)) {
        //   alert("Please enter a valid email address");
        //   return;
        // }
        
        
        // //validating gpa
        // if (gpa>4||gpa<0){
        //     alert("Enter a GPA on a scale of 4")
        //     return;
        // }
        // Creating a newStudent object from the current input field values
        const newStudent = {
            firstName,
            lastName,
            address,
            image,
            email,
            gpa
        }

        //
       
        
        // Update the newstudent state variable, in case it needs to be used elsewhere
        setnewstudent(newstudent);
        
        // once data is submitted, clear all input fields.
        setfirstname("")
        setlastname("")
        setaddress("")
        setimage("")
        setemail("")
        setgpa("")

        // Posting the newStudent object to the server which then would handle the database submission
        // the url for the api call is based on whether a campusid is provided or not

        const url = campusid ? `${process.env.REACT_APP_BACKEND_URL_1}/api/campuses/${campusid}`:`${process.env.REACT_APP_BACKEND_URL_1}/api/students`

        dispatch(addStudentThunk(url,newStudent))
        navigate(-1)
        // dispatch(fetchAllStudents(newStudent));
    }

    return(
        <div>
            <form onSubmit={HandleSubmit} className='input-form'>
                <h2>Enter Your Information below</h2>
                <input type='text' placeholder='Student First Name' value={firstName} onChange={setFirstName}></input>
                <input type='text' placeholder='Student Last Name' value={lastName} onChange={setLastName}></input>
                <input type='text' placeholder='Student Address' value={address} onChange={setAddress}></input>
                <input type='text' placeholder='Student Image' value={image} onChange={setImage}></input>
                <input type='text' placeholder='Student Email' value={email} onChange={setEmail}></input>
                <input type='text' placeholder='Student GPA' value={gpa} onChange={setGPA}></input>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddStudent