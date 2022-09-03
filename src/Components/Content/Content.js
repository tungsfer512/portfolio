import { Routes, Route } from "react-router-dom";

import About from "./About/About";
import Home from "./Home/Home";
import Project from "./Project/Project";

const Content = (props) => {
  return (
    <div className="content">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Project />}>
        </Route>
      </Routes>
    </div>

  )
}

export default Content;