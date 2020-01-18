import React from "react";
import NavBar from "./components/navbar/navbar";
import Me from "./components/About Me/me";
import ParticlesBg from "particles-bg";


const SKILLS = [{ type: "HTML, level:99" }];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Me />
        <ParticlesBg type="cobweb" bg="true" />
      </React.Fragment>
    );
  }
}

export default App;
