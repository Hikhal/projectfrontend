import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import UpdateStudent from "./updateStudentInfo";
import { removeStudentThunk } from "../reduxActions/fetchStudents";
const SingleStudentInfo = () => {
    const {id} = useParams()
    //console.log({id})


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deleteStudent = (id) => {
        dispatch(removeStudentThunk(id));
        // go back to prev page
        navigate(-1) // navigates to the prev page which is the allStudents page.
      };
  

    const [studentInfo, setStudentInfo] = useState("")
    // useEffect

    useEffect(()=>{
        async function getStudentInfo(){
            try {
                const info = await axios.get(`${process.env.REACT_APP_BACKEND_URL_1}/api/students/${id}`)
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
        <div className='parent-container'>
            <div className='details'>
             <img src={studentInfo.image} alt=""/>
             <h3 > <strong>First Name:</strong>{studentInfo.firstName}</h3>
             <h3 > <strong>Last Name:  </strong>{studentInfo.lastName}</h3>
             <h3 > <strong>Address: </strong>{studentInfo.address}</h3>
             <h3 > <strong>Email:</strong>{studentInfo.email}</h3>
             <h3 > <strong>GPA:</strong> {studentInfo.gpa}</h3>
             <h3 ><strong>Campus: </strong>{campusName}</h3>
             <p>  <Link className='tocampus-details' to = {`/singleCampus/${studentInfo.campusId}`} > {campusName} <strong>Details</strong></Link> </p>
             <br/>
               {/* Remove Student */}
               <button className='remove-Student' onClick={() => deleteStudent(id)}>Delete</button>
            <UpdateStudent prevStudentInfo={studentInfo}></UpdateStudent>
            
        </div>
        </div>
        
    )
}

export default SingleStudentInfo 