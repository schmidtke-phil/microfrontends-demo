import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import ScaleCard from "./ScaleCard";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-react-2</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <ScaleCard />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
