import React, {Component} from "react";
import "./Projects.css";

import Project from "./Project";
import projects from "./projects.json";
class Projects extends Component {
  compareProject(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

render()
{
  var projectArr = [];
  Object.keys(projects).forEach(function (project) {
    projectArr.push(projects[project]);
  });
  projectArr.sort(this.compareProject);
  return (

    <div className="projects-container">
      {projectArr.map(project =>
        <Project className="project" key={project.title} title={project.title} description={project.description}
                 url={project.url} github_url={project.github_url}/>
      )}
    </div>

  )
}
}
export default Projects;