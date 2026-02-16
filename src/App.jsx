import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/userinterface/homepage/HomePage";
import Job from "./components/userinterface/form/Job";
import Marriage from "./components/userinterface/form/Marriage";
import ShowJobDetails from "./components/userinterface/form/ShowJobDetails";
import ShowMarriageDetails from "./components/userinterface/form/ShowMarriageDetails";
import Login from "./components/admin/adminlogin/Login";
import Dashboard from "./components/admin/adminlogin/Dashboard";

function App() {

  return (<div>
    <Router>
      <Routes>
        <Route element={<HomePage/>} path="/"></Route>
        <Route element={<Job/>} path="/job"></Route>
        <Route element={<Marriage/>} path="/marriage"></Route>
        <Route element={<ShowJobDetails/>} path="/showjob"></Route>
        <Route element={<ShowMarriageDetails/>} path="/showmarriage"></Route>

        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Dashboard/>} path="/dashboard"></Route>
      </Routes>
    </Router>

  </div>)
}

export default App
