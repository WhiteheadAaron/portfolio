import React, { Component } from "react";
import styled from 'styled-components';
import Spanish from "./Spanish";
import Blackjack from "./Blackjack";
import Truckd from "./Truckd";

class Projects extends Component {

  state = { project: 'all' };

  chooseProject = project => this.setState({ project });

  render() {

    const smallScreenView = window.innerWidth <= 768;

    if (this.state.project === 'all') return <AllProjects chooseProject={this.chooseProject} smallScreenView={smallScreenView} />;
    if (this.state.project === 'Learning Spanish') return <Spanish chooseProject={this.chooseProject} />;
    if (this.state.project === 'Blackjack') return <Blackjack chooseProject={this.chooseProject} />;
    if (this.state.project === 'Truckd') return <Truckd chooseProject={this.chooseProject} />;
    return null;
  }
}

const projects = [
  { title: 'Blackjack', img: require('./../../assets/blackjack.jpg') },
  { title: 'Learning Spanish', img: require('./../../assets/spanish.png') },
  { title: 'Truckd', img: require('./../../assets/truckd.png') }
];

const generateProjects = chooseProject => {
  return projects.map((proj, i) => (
    <ProjectWrapper onClick={() => chooseProject(proj.title)} key={i}>
      <h2 style={{ margin: '15px', textAlign: 'center' }}>{proj.title}</h2>
      <img alt={`${proj.title} screenshot`} src={proj.img} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </ProjectWrapper>
  ));
};

const AllProjects = ({ chooseProject, smallScreenView }) => (
  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h1 style={{ margin: '10vh', textAlign: 'center' }}>Full Stack Development Projects</h1>
    <AllProjectsWrapper>
      {generateProjects(chooseProject)}
    </AllProjectsWrapper>
  </div>
)

const AllProjectsWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  width: 95%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectWrapper = styled.div`
  margin: 15px;
  width: 30%;
  height: auto;
  cursor: pointer;
  border: solid 1px #2d3436;
  padding: 20px;
  border-radius: 10%;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

export default Projects;
