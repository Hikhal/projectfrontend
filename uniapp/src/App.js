import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    // will add a nav bar.
    <Router>
      <Routes>
        <Route path = '/' element = {<Home></Home>} />

      </Routes>
    </Router>
  );
}

export default App;
// <Route path = '/allCampuses' element = {<Campuses></Campuses>} />
// <Route path = '/allStudents' element = {<Students></Students>} />
