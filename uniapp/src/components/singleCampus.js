import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

// This is a functional component for displaying individual campus information
const SingleCampusInfo = () => {
    // Here the 'useParams' hook provided by react-router-dom is used to get the route parameters.

    // The 'id' variable now contains the actual 'id' passed in the URL
    let { id } = useParams();

    // Now that the component has access to the campus id,
    // the api call to the server would be made in order to display the info of the campus.

    const [campus, setCampus] = useState("")

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
            <div className='details'>
                <img src={campus.img} alt="Campus" />
                <h1>Campus Name: {campus.name}</h1>
                <h1>Campus Address: {campus.address}</h1>
                <h1>Campus Description: {campus.description}</h1>
    
                <div>
                    <h1>Students: </h1>
                    <div>
                        {campusStudents.length === 0 ? (
                            <p>Campus does not contain students yet</p>
                        ) : (
                            students.map((item) => (
                                <div key={item.id}>
                                    <p><strong>First Name:</strong> {item.firstName} <strong>Last Name:</strong> {item.lastName}</p>
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
