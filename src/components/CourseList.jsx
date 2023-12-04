import { useEffect, useState } from "react";
import TutorialsCard from "./TutorialsCard";
// import courseDetails from "../assets/courseData";
import { useDispatch, useSelector } from "react-redux";
import { getDatabase, set, onValue, get, ref, child } from "firebase/database";
import { app } from "../assets/firebaseConfig";
import { getDetails } from "../redux/details";

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const Database = getDatabase(app);
  const courseDetails = useSelector((state) => state.courses.courseDetails);
  const likedCourses = useSelector((state) => state.courses.likedCourses);
  const [loading, setLoading] = useState(true);

  const filteredCourses = courseDetails.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    onValue(ref(Database, "courses/"), (snapshot) => {
      const dataArray = Object.values(snapshot.val());
      dispatch(getDetails(dataArray));
    });
  }, [likedCourses]);

  useEffect(() => {
    get(child(ref(Database), "courses/")).then((snapshot) => {
      const dataArray = Object.values(snapshot.val());
      dispatch(getDetails(dataArray));
      console.log(dataArray);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Course List</h2>

      {/* I have used this search input from flowbite */}
      <form className="m-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-md text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search course by name..."
            required
            value={searchTerm}
            onChange={(e) => {
              handleSearchTermChange(e);
            }}
          />
        </div>
      </form>

      <div className="flex justify-around flex-row items-center flex-wrap gap-5">
        {filteredCourses.map((course) => (
          <TutorialsCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
