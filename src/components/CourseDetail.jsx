import { useParams } from "react-router-dom";
import courseDetails from "../assets/courseData";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { enrollCourse } from "../redux/details";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const enorlledCourses = useSelector((state) => state.courses.enrolledCourses);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const course = courseDetails.find((course) => course.slug === slug);

  if (!course) {
    return <div className="text-red-500">Course not found</div>;
  }

  const handleEnrollClick = (course) => {
    const enrollingCourse = {
      id: course.id,
      slug: course.slug,
      name: course.name,
      instructor: course.instructor,
      progress: 0,
      completed: false,
      thumbnail: course.thumbnail,
      duration: course.duration,
      dueDate: course.startDate,
    };
    dispatch(enrollCourse(enrollingCourse));
    console.log(enorlledCourses);
    toast.success(
      "Congrats folk...You have enrolled to course.Happy Learning...!!"
    );
  };

  const toggleSyllabus = () => {
    setIsSyllabusOpen(!isSyllabusOpen);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <img src={`${course.thumbnail}`} alt="Course-thumbnail" />
      <h2 className="text-2xl font-bold mb-4">{course.name}</h2>

      <table className="min-w-full border border-gray-300">
        <tbody>
          <tr>
            <td className="border p-2 font-bold">Instructor</td>
            <td className="border p-2">{course.instructor}</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Description</td>
            <td className="border p-2">{course.description}</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Duration</td>
            <td className="border p-2">{course.duration}</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Schedule</td>
            <td className="border p-2">{course.schedule}</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Mode</td>
            <td className="border p-2">{course.mode}</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Prerequisites</td>
            <td className="border p-2">
              <ul>
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index}>
                    {index + 1}) {prerequisite}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <button
          onClick={toggleSyllabus}
          className=" text-black border px-4 py-2  rounded focus:outline-none "
        >
          {isSyllabusOpen ? "Hide Syllabus" : "Show Syllabus"}
          {isSyllabusOpen ? (
            <FaArrowUp className="inline ml-2" />
          ) : (
            <FaArrowDown className="inline ml-2 " />
          )}
        </button>
        {isSyllabusOpen && (
          <table className="mt-4 min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border p-2 font-bold">Week</th>
                <th className="border p-2 font-bold">Topic</th>
                <th className="border p-2 font-bold">Content</th>
              </tr>
            </thead>
            <tbody>
              {course.syllabus.map((item) => (
                <tr key={item.week}>
                  <td className="border p-2">{item.week}</td>
                  <td className="border p-2">{item.topic}</td>
                  <td className="border p-2">{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {enorlledCourses.some(
        (enrolledCourse) => enrolledCourse.id === course.id
      ) ? (
        <button
          onClick={() => {
            handleEnrollClick(course);
          }}
          disabled={course.enrollmentStatus !== "Open"}
          className={`mt-6 bg-blue-500 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed`}
        >
          Enrolled
        </button>
      ) : (
        <button
          onClick={() => {
            handleEnrollClick(course);
          }}
          disabled={course.enrollmentStatus !== "Open"}
          className={`mt-6 bg-blue-500 text-white px-4 py-2 rounded ${
            course.enrollmentStatus !== "Open" &&
            "opacity-50 cursor-not-allowed"
          }`}
        >
          Enroll
        </button>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CourseDetail;
