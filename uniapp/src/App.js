import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import AllCampuses from "./components/allCampuses";
import './App.css';
import AllStudents from "./components/allStudents";
import AddStudent from "./components/addstudent";

function App() {
  return (
    // will add a nav bar.
    <Router>
      <div>
      <Link to = "/allCampuses"> All Campuses</Link>
      <Link to = "/allStudents"> All Student</Link>
      </div>
      <Routes>
        <Route path = '/' element = {<Home></Home>} />
        <Route path = '/allCampuses' element = {<AllCampuses></AllCampuses>} />
        <Route path = '/allStudents' element = {<AllStudents></AllStudents>} />
        <Route path = '/addstudent' element = {<AddStudent></AddStudent>} />
        

      </Routes>
    </Router>
  );
}

export default App;
// <Route path = '/allStudents' element = {<Students></Students>} />
