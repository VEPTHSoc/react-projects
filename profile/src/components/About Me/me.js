import React from "react";
import Tilt from "react-tilt";
import Container from "@material-ui/core/Container";
import Avatar from "../../images/avatar.png";
import Typist from "react-typist";
import "./me.css";



const Profile = () => {
  return (
    <div className="style">
      <Container maxwidth="sm">
        <Tilt options={{ max: 25, transition: true }}>
          <img src={Avatar} alt="avatar" />
        </Tilt>
        <Typist>
          <font size="10">I am VepthSOC</font>
          <Typist.Delay ms={500} />
          <br />
          <br />
          <font size="5">You don't need to know me, to know me</font>
        </Typist>
      </Container>
    </div>
  );
};

export default Profile;
