import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ongoingCourses = useSelector((state) => state.courses.ongoingCourses);
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const likedCourses = useSelector((state) => state.courses.likedCourses);
  const completedCourse = useSelector(
    (state) => state.courses.completedCourses
  );

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    console.log(location);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    profileImage: "/user-profile.jpg",
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="flex items-center justify-around">
        <Link className="text-white font-bold text-xl hover:text-blue-200">
          Tech-School
        </Link>
        <div className="text-white flex gap-5">
          <Link className="hover:text-blue-300" to={"/"}>
            Courses
          </Link>
          <Link className="hover:text-blue-300" to={"/dashboard"}>
            Dashboard
          </Link>
        </div>

        <div className="relative inline-block text-white">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={"/profile-image.jpg"}
                alt={user.name}
              />
            </div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg h-56 w-52 z-10 ">
              <div className="p-2">
                <p className="text-gray-800 font-semibold">
                  Name : <span>{user.name}</span>
                </p>
                <p className="text-gray-600">
                  Email : <span>{user.email}</span>
                </p>
                <p className="text-gray-600">
                  Courses Ongoing :<span>{ongoingCourses.length}</span>
                </p>
                <p className="text-gray-600">
                  Courses Enrolled :<span>{enrolledCourses.length}</span>
                </p>
                <p className="text-gray-600">
                  Courses Liked :<span>{likedCourses.length}</span>
                </p>
                <p className="text-gray-600">
                  Courses completed :<span>{completedCourse.length}</span>
                </p>
                <button
                  onClick={() =>
                    location.pathname === "/"
                      ? navigate("dashboard")
                      : navigate("/")
                  }
                  className="bg-blue-500 text-white px-2 py-2 rounded hover:bg-blue-600 focus:outline-none w-full "
                >
                  {location.pathname === "/"
                    ? "Take me to Dashboard"
                    : "Take me to courses"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
