import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const userRoute = "/projects";

const getAllProjects = async () => {
  try {
    const response = await axios.get(`${url}${userRoute}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch  error:", error);
    }
    throw error;
  }
};

const getProjectsById = async (id) => {
  try {
    const response = await axios.get(`${url}${userRoute}/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch  error:", error);
    }
    throw error;
  }
};

const postProject = async (newProject) => {
  try {
    const response = await axios.post(`${url}${userRoute}`, newProject);
    if (response.status === 201) {
      return response;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch  error:", error);
    }
    throw error;
  }
};

const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${url}${userRoute}/${id}`);
    if (response.status === 204) {
      return response;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch  error:", error);
    }
    throw error;
  }
};

const updateProject = async (id, project) => {
  try {
    const response = await axios.post(`${url}${userRoute}/${id}`, project);
    if (response.status === 200) {
      return response;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch  error:", error);
    }
    throw error;
  }
};

export {
  getAllProjects,
  getProjectsById,
  postProject,
  deleteProject,
  updateProject,
};
