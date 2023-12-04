/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const LikedCourseCard = ({ course }) => {
  const navigate = useNavigate();
  const onEnrollClick = (course) => {
    navigate(`/course/${course.slug}`);
  };
  return (
    <>
      <div className=" w-full p-4">
        <div className="bg-gray-100 p-4 rounded-lg w-[20rem]">
          <img
            src={course.thumbnail}
            alt={`Thumbnail for ${course.name}`}
            className="mb-2 rounded-lg w-full h-40 object-cover"
          />

          <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
          <h3 className="text-sm text-gray-600 mb-2">
            Instructor: <span className="font-bold">{course.instructor}</span>
          </h3>
          <div className="mb-2">
            <div className="text-sm text-gray-600">Due Date</div>
            <div className="text-sm">{course.dueDate}</div>
          </div>
          <button
            onClick={() => onEnrollClick(course)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none w-full"
          >
            Enroll
          </button>
        </div>
      </div>
    </>
  );
};

export default LikedCourseCard;
