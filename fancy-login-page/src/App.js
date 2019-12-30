import React, { Component } from "react";

import ParticlesBg from "particles-bg";
import SignIn from "./Signin";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <SignIn/>
        <ParticlesBg type="random" bg={true}/>
      </div>
    );
  }
}

export default App;
