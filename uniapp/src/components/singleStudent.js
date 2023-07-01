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
                console.log("student 2 info",info.data)
                setStudentInfo(info.data)
            } catch (error) {
                console.error(error)
            }
        }
        getStudentInfo()
    }, [id])
    return (
        <div>
             <h1>single students here</h1>
        </div>
    )
}

export default SingleStudentInfo 