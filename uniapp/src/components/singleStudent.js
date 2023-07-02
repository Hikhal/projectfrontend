import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useParams } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const SingleStudentInfo = () => {
    const {id} = useParams()
    //console.log({id})

    const [studentInfo, setStudentInfo] = useState("")
    // useEffect

    useEffect(()=>{
        async function getStudentInfo(){
            try {
                const info = await axios.get(`http://localhost:8080/api/students/${id}`)
                setStudentInfo(info.data)
            } catch (error) {
                console.error(error)
            }
        }
        getStudentInfo()
    }, [id])

    // get the campus the student is associated with.
    // first we will get the list of campuses from our redux store
    const campuslist = useSelector(state => state.getCampuses)
    //console.log("campuses -->",campuslist)
    console.log( "student id",studentInfo.campusId)
    // filter campus that will return what campus the student belongs to
    const studentCamp = campuslist.find((campus) => campus.id === studentInfo.campusId);
    //console.log(studentCamp)

    const campusName = studentCamp ? studentCamp.name : "Not enrolled in any campus yet.";
   
    return (
        <div className='details'>
             <img src={studentInfo.image} alt=""/>
             <h3> <strong>First Name:</strong>{studentInfo.firstName}</h3>
             <h3> <strong>Last Name:  </strong>{studentInfo.lastName}</h3>
             <h3> <strong>Address: </strong>{studentInfo.address}</h3>
             <h3> <strong>Email:</strong>{studentInfo.email}</h3>
             <h3> <strong>GPA:</strong> {studentInfo.gpa}</h3>
             <p>  <Link to = {`/singleCampus/${studentInfo.campusId}`}> <strong>Campus:</strong> {campusName}</Link> </p>
            
        </div>
    )
}

export default SingleStudentInfo 