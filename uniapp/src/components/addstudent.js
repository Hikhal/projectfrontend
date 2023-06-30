import React, {useState} from 'react'
import axios from 'axios'

const AddStudent = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [address, setaddress] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    const [gpa, setgpa] = useState("")


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
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Student First Name' value={firstname} onChange={setFirstName}></input>
                <input type='text' placeholder='Student Last Name' value={lastname} onChange={setLastName}></input>
                <input type='text' placeholder='Student Address' value={address} onChange={setAddress}></input>
                <input type='text' placeholder='Student Image' value={image} onChange={setImage}></input>
                <input type='text' placeholder='Student Email' value={email} onChange={setEmail}></input>
                <input type='text' placeholder='Student GPA' value={gpa} onChange={setGPA}></input>

            </form>
        </div>
    )
}