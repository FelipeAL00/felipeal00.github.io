import React, { Component } from "react";
import { ProjectList, Button } from "./styles";

import api from "../../services/api";

class Projects extends Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    const response = await api.get("/repos");

    this.setState({ projects: response.data });
  }

  render() {
    const { projects } = this.state;
    return (
      <ProjectList>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>
            <span>{project.description}</span>
            <label>{project.language}</label>
            <Button to={project.html_url}>
              <span>Ver mais...</span>
            </Button>
          </li>
        ))}
      </ProjectList>
    );
  }
}

export default Projects;
