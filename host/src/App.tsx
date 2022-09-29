import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Showcase from "./Showcase";

const App = () => (
  <div className="">
    <scale-app-shell>
      <scale-app-header slot="header" id="header">
        <div slot="menu-sector">
            <scale-nav-segement
              active="true"
              style={{"fontSize": "18px", "fontWeight": "bold"}}
            >
              Microfrontend Demo
            </scale-nav-segement>
        </div>
        <div slot="menu-main">
          <scale-nav-main name="Github Repo"></scale-nav-main>
        </div>
      </scale-app-header>
      <div>
        <Showcase />
      </div>
    </scale-app-shell>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
