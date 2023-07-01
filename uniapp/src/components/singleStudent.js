import React, {useEffect, useState} from "react";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    return (
        <div>
             <img src={studentInfo.image} alt="Student"/>
             <br></br>
             <p1> <strong>First Name:</strong>{studentInfo.firstName}</p1>
             <br></br>
             <p1> <strong>Last Name:  </strong>{studentInfo.lastName}</p1>
             <br></br>
             <p1> <strong>Address: </strong>{studentInfo.address}</p1>
             <br></br>
             <p1> <strong>Email:</strong>{studentInfo.email}</p1>
             <br></br>
             <p1> <strong>GPA:</strong> {studentInfo.gpa}</p1>
             <br></br>
        </div>
    )
}

export default SingleStudentInfo 