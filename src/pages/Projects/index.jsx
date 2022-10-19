import React, { Component } from "react";
import { ProjectList, Button, AvatarImage, AvatarHeader } from "./styles";

import api from "../../services/api";
import { GitHub } from "@mui/icons-material";

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
            <AvatarHeader>
              <strong>{project.name}</strong>
              <GitHub />
            </AvatarHeader>
            <span>{project.description}</span>
            <label>Linguagem: {project.language}</label>
            <Button href={project.html_url} target="_blank">
              <span>Ver mais...</span>
            </Button>
          </li>
        ))}
      </ProjectList>
    );
  }
}

export default Projects;
