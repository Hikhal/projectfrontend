import React from 'react'
import {BrowserRouter as Link} from "react-router-dom";

const Home = ()=> {
    return (
        <div>
            <h1>Home</h1>
            <Link to = "/allCampuses"> All Campuses</Link>
            <Link to = "/allStudents"> All Students</Link>
        </div>
    )

}
export default Home