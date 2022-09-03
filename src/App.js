import { BrowserRouter as Router } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    </Router>
  );
}

export default App;
