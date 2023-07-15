import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const userRoute = "/api/projects/";

const apiProjects = async () => {
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
    // Ajouter la redirection (voir pour une fonction dans service qui prend un param "error" afin d'afficher la page erreur)
  }
};

export default apiProjects;
