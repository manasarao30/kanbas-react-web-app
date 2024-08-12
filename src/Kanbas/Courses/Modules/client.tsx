import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findModulesForCourse = async (courseNumber: string) => {
  try {
    const response = await axios.get(`${COURSES_API}/${courseNumber}/modules`);
    return response.data;
  } catch (error) {
    console.error("Error fetching modules:", error);
    throw error;
  }
};

export const createModule = async (courseNumber: string, module: any) => {
  try {
    const response = await axios.post(`${COURSES_API}/${courseNumber}/modules`, module);
    return response.data;
  } catch (error) {
    console.error("Error creating module:", error);
    throw error;
  }
};

export const findModuleById = async (moduleId: string) => {
  try {
    const response = await axios.get(`${MODULES_API}/${moduleId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching module by ID:", error);
    throw error;
  }
};

export const updateModule = async (module: any) => {
  try {
    const response = await axios.put(`${MODULES_API}/${module._id}`, module);
    return response.data;
  } catch (error) {
    console.error("Error updating module:", error);
    throw error;
  }
};

export const deleteModule = async (moduleId: string) => {
  try {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting module:", error);
    throw error;
  }
};
