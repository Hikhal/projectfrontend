import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

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

    return (
      <div>
        <img src={campus.img} alt="Campus" />
        <h1>Campus Name: {campus.name}</h1>
        <h1>Campus Address: {campus.address}</h1>
        <h1>Campus Description: {campus.description}</h1>
      </div>
    );
};
export default SingleCampusInfo
