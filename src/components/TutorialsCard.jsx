/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dislikeCourse, likeCourse } from "../redux/details";
import { getDatabase, ref, child, runTransaction } from "firebase/database";
import { app } from "../assets/firebaseConfig";

const TutorialsCard = ({ course }) => {
  const Database = getDatabase(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enorlledCourses = useSelector((state) => state.courses.enrolledCourses);
  const likedCourses = useSelector((state) => state.courses.likedCourses);
  const [liked, setLiked] = useState(false);
  const onLikeClick = (course) => {
    const likedCourse = {
      id: course.id,
      slug: course.slug,
      name: course.name,
      startDate: course.startDate,
      thumbnail: course.thumbnail,
    };

    setLiked(!liked);
    if (!liked) {
      dispatch(likeCourse(likedCourse));
      handleLike(course.id);
    } else {
      dispatch(dislikeCourse(likedCourse));
      console.log(likedCourse);
      handleDislike(course.id);
    }
    console.log(likedCourses);
  };
  const onEnrollClick = (course) => {
    navigate(`/course/${course.slug}`);
  };
  const handleLike = (courseId) => {
    runTransaction(
      child(ref(Database), `courses/${courseId - 1}`),
      (course) => {
        if (course) {
          course.likes = (course.likes || 0) + 1;
        }
        return course;
      }
    )
      .then(() => {
        console.log("Transaction successfully committed!");
      })
      .catch((error) => {
        console.error("Transaction failed to commit:", error);
      });
  };

  const handleDislike = (courseId) => {
    runTransaction(
      child(ref(Database), `courses/${courseId - 1}`),
      (course) => {
        if (course) {
          course.likes = Math.max((course.likes || 0) - 1, 0);
        }
        return course;
      }
    )
      .then(() => {
        console.log("Dislike transaction successfully committed!");
      })
      .catch((error) => {
        console.error("Dislike transaction failed to commit:", error);
      });
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <Link to={`/course/${course.slug}`}>
          <img
            className="w-full h-48 object-cover"
            src={course.thumbnail}
            alt={course.name}
          />
        </Link>

        <div className="p-4">
          <div className="mb-2">
            <h3 className="text-xl font-bold">{course.name}</h3>
            <p className="text-gray-600">{course.instructor}</p>
          </div>

          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">
              {course.enrollmentStatus}
            </span>
            <span className="mr-2 text-gray-700">•</span>
            <span className="text-gray-700">{course.duration}</span>
          </div>

          <div className="mb-4">
            <p className="text-gray-700">{course.description}</p>
          </div>

          <div className="flex items-center justify-between">
            {enorlledCourses.some(
              (enrolledCourse) => enrolledCourse.id === course.id
            ) ? (
              <button
                onClick={() => {
                  onEnrollClick(course);
                }}
                disabled={course.enrollmentStatus !== "Open"}
                className={`mt-6 bg-green-500 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed`}
              >
                Enrolled
              </button>
            ) : (
              <button
                onClick={() => {
                  onEnrollClick(course);
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

            <div className="flex items-center">
              {liked == false ? (
                <button
                  onClick={() => onLikeClick(course)}
                  className="mr-2 text-gray-700 focus:outline-none"
                >
                  <CiStar />
                </button>
              ) : (
                <button
                  onClick={() => onLikeClick(course)}
                  className="mr-2 text-gray-700 focus:outline-none"
                >
                  <FaStar />
                </button>
              )}
              <span className="text-gray-700">{course.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TutorialsCard;
