import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProject, getProjectsById } from "../services/api.projects";

function SelectedProject() {
  const [selectedProject, setSelectedProjects] = useState();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getProjectsById(id)
      .then((res) => {
        console.info("Projects", res);
        setSelectedProjects(res);
        setSelectedImage(res.main_photo);
      })
      .catch((err) => console.error(err));
  }, [id]);
  if (!selectedProject) {
    return null;
  }
  async function handleDeleteProject() {
    try {
      await deleteProject(id);
      navigate("/projects");
    } catch (error) {
      console.error(error);
    }
  }
  const handleUpdateProject = () => {
    navigate(`/admin/${id}`);
  };

  return (
    <div
      className="mt-20 overflow-y-scroll no-scrollbar"
      style={{ height: `calc(100vh - 200px)` }}
    >
      <div className="flex flex-col items-center gap-10">
        <img className="w-72" src={selectedProject.logo} alt="" />
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-14">
          <div className="justify-items-center h-96 relative">
            <img className="h-96" src={selectedImage} alt="" />
            <img
              className="absolute w-24 bottom-[-25px] left-[120px] border-2 border-black"
              src={selectedProject.main_photo}
              alt=""
            />
            <img
              className="absolute w-24 bottom-[-25px] left-[230px] border-2 border-black"
              src={selectedProject.secondary_photo}
              alt=""
            />
            <img
              className="absolute w-24 bottom-[-25px] left-[340px] border-2 border-black"
              src={selectedProject.third_photo}
              alt=""
            />
          </div>
          <div className="bg-black p-6 xl:w-3/5">
            <p
              className="text-sm lg:text-lg"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-10">
          <button
            type="button"
            onClick={() => handleUpdateProject()}
            className="bg-blue-500 text-white p-3 rounded"
          >
            Update Project
          </button>
          <button
            type="button"
            onClick={() => handleDeleteProject()}
            className="bg-red-500 text-white p-3 rounded"
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedProject;
