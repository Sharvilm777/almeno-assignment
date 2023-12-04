import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import "./index.css";
import CourseDetail from "./components/courseDetail";
import StudentDashboard from "./components/StudentDashboard";
import Navbar from "./components/Navbar";
// import { useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
