const express = require("express");
const projectsControllers = require("../src/Controllers/ProjectsController");
const router = express.Router();

router.get("/projects", projectsControllers.getAllProjects);
router.get("/projects/:id", projectsControllers.getProjectsById);
router.post("/projects", projectsControllers.createProject);
router.put("/projects/:id", projectsControllers.updateProject);
router.delete("/projects/:id", projectsControllers.deleteProject);

module.exports = router;
