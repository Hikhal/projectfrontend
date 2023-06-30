import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import AllCampuses from "./components/allCampuses";
import './App.css';
import AllStudents from "./components/allStudents";
import AddStudent from "./components/addstudent";
import AddCampus from "./components/addCampus";

function App() {
  return (
    // will add a nav bar.
    <Router>
       <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/allCampuses">All Campuses</Link>
        <Link to="/allStudents">All Students</Link>
      </nav>
      <Routes>
        <Route path = '/' element = {<Home></Home>} />
        <Route path = '/allCampuses' element = {<AllCampuses></AllCampuses>} />
        <Route path = '/allStudents' element = {<AllStudents></AllStudents>} />
        <Route path = '/addstudent' element = {<AddStudent></AddStudent>} />
        <Route path = '/addCampus' element = {<AddCampus/>} />
      </Routes>
    </Router>
  );
}

export default App;
// <Route path = '/allStudents' element = {<Students></Students>} />
