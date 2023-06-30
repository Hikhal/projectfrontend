import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import AllCampuses from "./components/allCampuses";
import './App.css';

function App() {
  return (
    // will add a nav bar.
    <Router>
      <div>
      <Link to = "/allCampuses"> All Campuses</Link>
      </div>
      <Routes>
        <Route path = '/' element = {<Home></Home>} />
        <Route path = '/allCampuses' element = {<AllCampuses></AllCampuses>} />

      </Routes>
    </Router>
  );
}

export default App;
// <Route path = '/allStudents' element = {<Students></Students>} />
