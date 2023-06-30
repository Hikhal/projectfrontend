import React, {useEffect, useState} from 'react'
import axios from 'axios'

const AddStudent = () => {
    const [firstName, setfirstname] = useState("")
    const [lastName, setlastname] = useState("")
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    const [gpa, setgpa] = useState("")
    const [newstudent,setnewstudent] = useState(undefined)


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
        event.preventDefault();
    
        const newStudent = {
            firstName,
            lastName,
            address,
            image,
            email,
            gpa
        }
        
        // Set state if you need to use the new student elsewhere
        setnewstudent(newstudent);
        
        //
    
        // Now call your addStudent function directly with newStudent
        try {
            const submission = await axios.post('http://localhost:8080/api/students', newStudent);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={HandleSubmit}>
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