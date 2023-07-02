import React, {useEffect, useState} from 'react'
import axios from 'axios'

/**
 * The component contains an input field for each attribute of a student (first name, last name, address, image, email, and GPA). 
 * It uses React hooks to maintain state for each of these fields and updates these state variables whenever the corresponding input field changes.
 *  When the form is submitted, it creates a new student object with the current values of the input fields
 *  and sends a POST request to add this student to a database. 
 * After submitting, it clears the input fields.
 */

const AddStudent = () => {
    const [firstName, setfirstname] = useState("")
    const [lastName, setlastname] = useState("")
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    const [gpa, setgpa] = useState("")
    const [newstudent,setnewstudent] = useState(undefined)


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
        //name.trim() will return a falsey value if the the name is only whitespace or empty
        if (!firstName.trim() || !lastName) {
            alert('First Name and Last Name are required');
            return;
        }

        // Only aplha numerical and spaces are allowed
        const nameRegex = /^[A-Za-z0-9\s]+$/;
        if (!nameRegex.test(firstName)) {
            alert('Name should contain only alphabets');
            return;
        }

        //Image is Required
        if (!image){
            alert("Image is Required")
            return;
        }
    
        // Creating a newStudent object from the current input field values
        const newStudent = {
            firstName,
            lastName,
            address,
            image,
            email,
            gpa
        }
        
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
        try {
            const submission = await axios.post('http://localhost:8080/api/students', newStudent);
        } catch (error) {
            console.log(error);
        }
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