import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AddStudent from './addstudent';

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

    console.log("Campus Students -->", campusStudents) // should print out students having the same campusId as the param, id
    return (
        students.length > 0 && (
            <div>
               <button onClick={handleClick}> Add Student </button>
               {/* If showAddStudent is true, the <AddStudent> component is rendered.
                 If showAddStudent is false, the <AddStudent> component is not rendered.*/}
                {showAddStudent && <AddStudent campusid={id} />} 
                <br></br>
                <img src={campus.img} alt="Campus" />
                <h1>Campus Name: {campus.name}</h1>
                <h1>Campus Address: {campus.address}</h1>
                <h1>Campus Description: {campus.description}</h1>
    
                <div>
                    <h2>Students: </h2>
                    <div className=''>
                        {campusStudents.length === 0 ? (
                            <p>Campus does not contain students yet</p>
                        ) : (
                            campusStudents.map((item) => (
                                <div key={item.id}>
                                    <p><Link to={`/singleStudent/${item.id}`}> Name: {item.firstName}  {item.lastName} </Link></p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        )
    );
    
};
export default SingleCampusInfo
