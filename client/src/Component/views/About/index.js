import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { Content } from "./index.style";
import conversation from "../../../assets/conversation.svg";

const About = () => {
  return (
    <div>
      <Header headerImg={conversation} titleText="About us" />
      <Content>
        <p>
          This game will help you create a Commons - a set of places online and
          on the ground that provide an environment within which connections and
          collaboration can take place. The game will do that in two ways. First
          you can play as a “community connector” using online methods and other
          activities to help people make connections, find opportunities in
          their community or network, and develop new projects and
          collaborations.
        </p>
        <br />
        <p>
          Second, you can play as a team reviewing the support that community
          connectors need, and consider how to develop a mapping, support and
          communication system. We call that team the hub, and their new system
          the community platform.
        </p>
      </Content>
      <Footer backLink="/" nextLink="/howTo" reviewScenario={false} />
    </div>
  );
};

export default About;
