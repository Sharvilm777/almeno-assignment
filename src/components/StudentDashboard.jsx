/* eslint-disable react/prop-types */
import { completeCourse } from "../redux/details";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "./CourseCard";
import LikedCourseCard from "./LikedCourseCard";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const ongoingCourses = useSelector((state) => state.courses.ongoingCourses);
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const likedCourses = useSelector((state) => state.courses.likedCourses);
  const completedCourse = useSelector(
    (state) => state.courses.completedCourses
  );

  const handleMarkComplete = (course) => {
    const updatedCourse = { ...course, progress: 100, completed: true };
    dispatch(completeCourse(updatedCourse));
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>

      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 overflow-x-hidden">
        {/* Ongoing Courses */}
        <div className="flex-none w-full  px-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Ongoing Courses</h3>
          {ongoingCourses.length > 0 ? (
            <div className="flex flex-row gap-4 flex-nowrap  w-full overflow-x-auto ">
              {ongoingCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  handleMarkComplete={handleMarkComplete}
                />
              ))}
            </div>
          ) : (
            <p>No ongoing courses.</p>
          )}
        </div>

        {/* liked course  */}
        <div className="flex-none w-full  px-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Liked Courses</h3>
          {likedCourses.length > 0 ? (
            <div className="flex flex-row gap-4 flex-nowrap  w-full overflow-x-auto ">
              {likedCourses.map((course) => (
                <LikedCourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p>No Liked courses.</p>
          )}
        </div>

        {/* Completed courses  */}
        <div className="flex-none w-full  over-flow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Completed Courses</h3>
          {completedCourse.length > 0 ? (
            <div className="flex flex-row gap-4 flex-nowrap  w-full overflow-x-auto">
              {completedCourse.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p>No completed courses.</p>
          )}
        </div>

        {/* All Courses */}
        <div className="flex-none w-full over-flow-x-auto ">
          <h3 className="text-lg font-semibold mb-4">All Courses</h3>
          {enrolledCourses.length > 0 ? (
            <div className="flex flex-row gap-4 flex-nowrap  w-full overflow-x-auto">
              {enrolledCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p>No enrolled courses yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
