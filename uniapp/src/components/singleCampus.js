import { useParams, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AddStudent from './addstudent';
import UpdateCampus from './updateCampusInfo.js';
import UpdateStudent from './updateStudentInfo';


// This is a functional component for displaying individual campus information
const SingleCampusInfo = () => {

    // Here the 'useParams' hook provided by react-router-dom is used to get the route parameters.

    // The 'id' variable now contains the actual 'id' passed in the URL
    let { id } = useParams();

    // Now that the component has access to the campus id,
    // the api call to the server would be made in order to display the info of the campus.

    const [campus, setCampus] = useState("")
    // Declare a new state variable, "showAddStudent", which we'll use to control the visibility of the "AddStudent" component.
    // The initial value of "showAddStudent" is set to false.       
    const [showAddStudent, setShowAddStudent] = useState(false);

    // This function is a click event handler for the "Add Student" button. 
    // When the button is clicked, it will set the "showAddStudent" state to true, making the "AddStudent" component visible.
    const handleClick = () => {
      setShowAddStudent(true);
    };

    const updatecampus=(payload)=>{
        setCampus(payload);
    }

    useEffect(()=>{
        async function getCamp(){
            try {
                const campInfo = await axios.get(`http://localhost:8080/api/campuses/${id}`)
                console.log(campInfo.data)
                setCampus(campInfo.data)
            } catch (error) {
                console.error(error)
            }
        }
        getCamp()

    } ,[id])
    
    // getting the list of the students from the redux store
    const students = useSelector(state => state.getStudents)
    // logging to see if the students list is retrieved 
    console.log("students -->", students)

    // Now the goal is to display the students by campuses, this can be achieved by filtering the array by matching the campusId and only displaying those students.

    const campusStudents = students.filter((student) => {
        return student.campusId == id
    })
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(`/allCampuses`)

    }

    console.log("Campus Students -->", campusStudents) // should print out students having the same campusId as the param, id
    return (
            (
            // <div className='parent-container'>
            <div className='details-campus'>
               {/* If showAddStudent is true, the <AddStudent> component is rendered.
                 If showAddStudent is false, the <AddStudent> component is not rendered.*/}
                {showAddStudent && <AddStudent campusid={id} />} 
                <br></br>
                <img src={campus.img} alt="" />
                <h1>Campus Name: {campus.name}</h1>
                <h1>Campus Address: {campus.address}</h1>
                <h1>Campus Description: {campus.description}</h1>
    
                <div>
                    <div className=''>
                        {campusStudents.length === 0 ? (
                            <p>Campus does not contain students yet</p>
                        ) : (
                            campusStudents.map((item) => (
                                <div key={item.id}>
                                    <h2>Student: {item.firstName} {item.lastName}</h2>
                                    <p><Link className='viewDetails-link' to={`/singleStudent/${item.id}`}>{item.firstName}  {item.lastName} Details</Link></p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <br/>
                {/* <Link to="/addstudent" className='add-stu'>Add Student</Link> */}
                <button onClick={handleGoBack}>Return Home</button>;
                <button className='add-stu' onClick={handleClick} > Add Student </button>
                <UpdateCampus previousCampusInfo={campus} updateCampus={updatecampus}></UpdateCampus>
                

            </div>
            // </div>

        )
    );
    
};
export default SingleCampusInfo
