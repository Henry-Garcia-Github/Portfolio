import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../services/api.projects";

function Project() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getAllProjects()
      .then((res) => {
        setProjects(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full h-full flex justify-center gap-4 flex-wrap">
      {projects &&
        projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <img
              src={project.logo}
              alt={`Logo du projet ${project.name}`}
              className="w-40 h-40 object-contain cursor-pointer"
            />
          </Link>
        ))}
    </div>
  );
}

export default Project;
