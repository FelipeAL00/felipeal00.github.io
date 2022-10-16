import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

export default function CreateRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<AboutMe />} />
      <Route path="/formacoes" element={<Education />} />
      <Route path="/projetos" element={<Projects />} />
    </Routes>
  );
}
