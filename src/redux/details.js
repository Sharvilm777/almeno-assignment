import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courseDetails: [],
    likedCourses: [],
    enrolledCourses: [],
    ongoingCourses: [],
    completedCourses: [],
}

export const detailSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        getDetails: (state, action) => {
            state.courseDetails = action.payload
        },
        enrollCourse: (state, action) => {
            state.enrolledCourses.push(action.payload);
            state.ongoingCourses.push(action.payload);
        },
        likeCourse: (state, action) => {
            state.likedCourses.push(action.payload);
        },
        completeCourse: (state, action) => {
            state.ongoingCourses = state.ongoingCourses.filter(course => course.id !== action.payload.id);
            state.enrolledCourses = state.enrolledCourses.map(course => {
                if (course.id === action.payload.id) {
                    return { ...course, completed: true, progress: 100 };
                }
                return course;
            });
            state.completedCourses.push(action.payload);
        },
        dislikeCourse: (state, action) => {
            state.likedCourses = state.likedCourses.filter(course => course.id !== action.payload.id);
        },

        // progressUpdate: (state, action) => {
        //     state.ongoingCourses
        // }

    },
})


export const { enrollCourse, likeCourse, dislikeCourse, completeCourse, getDetails } = detailSlice.actions

export default detailSlice.reducer