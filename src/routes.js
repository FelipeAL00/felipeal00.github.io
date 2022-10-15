import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

export default function CreateRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<AboutMe />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
