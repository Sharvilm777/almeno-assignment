import React from "react";

const CourseCard = ({ course, handleMarkComplete }) => {
  return (
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
          <div className="text-sm text-gray-600">Progress</div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  {course.progress}% Complete
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-teal-600">
                  {course.progress}%
                </span>
              </div>
            </div>
            <div className="flex h-2 overflow-hidden text-xs bg-teal-200 rounded">
              <div
                style={{ width: `${course.progress}%` }}
                className="flex flex-col justify-center bg-teal-500 shadow-none whitespace-nowrap text-white"
              ></div>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <div className="text-sm text-gray-600">Due Date</div>
          <div className="text-sm">{course.dueDate}</div>
        </div>

        {course.completed ? (
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none w-full">
            Completed
          </button>
        ) : (
          <button
            onClick={() => handleMarkComplete(course)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none w-full"
          >
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
