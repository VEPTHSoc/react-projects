import BinaryMode from "./components/binary";
import { Container } from "@material-ui/core";
import Nav from "./nav";
import React from "react";

function App() {
  return (
    <Container>
      <Nav></Nav>
      <BinaryMode></BinaryMode>
    </Container>
  );
}

export default App;
