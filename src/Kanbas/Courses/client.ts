// import axios from "axios";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// export const fetchAllCourses = async () => {
//   const { data } = await axios.get(COURSES_API);
//   return data;
// };

// export const createCourse = async (course: any) => {
//     const response = await axios.post(COURSES_API, course);
//     return response.data;
//   };
  
//   export const deleteCourse = async (id: string) => {
//     const response = await axios.delete(`${COURSES_API}/${id}`);
//     return response.data;
//   };
  
//   export const updateCourse = async (course: any) => {
//     const response = await axios.put(`${COURSES_API}/${course._id}`, course);
//     return response.data;
//   };
  
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Fetch all courses
export const fetchAllCourses = async () => {
  try {
    const response = await axios.get(COURSES_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Fetch a specific course by its ID
export const findCourseById = async (courseId: string) => {
  try {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course with ID ${courseId}:`, error);
    throw error;
  }
};

// Create a new course
export const createCourse = async (course: any) => {
  try {
    const response = await axios.post(COURSES_API, course);
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// Update a course by its ID
export const updateCourse = async (course: any) => {
  try {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
  } catch (error) {
    console.error(`Error updating course with ID ${course._id}:`, error);
    throw error;
  }
};

// Delete a course by its ID
export const deleteCourse = async (courseId: string) => {
  try {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting course with ID ${courseId}:`, error);
    throw error;
  }
};
