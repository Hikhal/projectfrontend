import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    // will add a nav bar.
    <Router>
      <Routes>
        <Route path = '/' element = {<Home></Home>} />
        <Route path = '/allCampuses' element = {<Campuses></Campuses>} />
        <Route path = '/allStudents' element = {<Students></Students>} />
      </Routes>
    </Router>
  );
}

export default App;
