import React, { Component } from "react";
import styled from 'styled-components';
import { useSpring, animated, config } from "react-spring";
import ProjectPage from "./ProjectPage";

class Projects extends Component {

  state = { project: 'all' };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.project !== this.state.project) window.scrollTo(0, 0);
  }

  chooseProject = project => this.setState({ project });
  goToAllProjects = () => this.setState({ project: 'all' });

  render() {

    if (this.state.project === 'all') return <AllProjects chooseProject={this.chooseProject} />;

    const activeProject = projects.filter(proj => proj.title === this.state.project)[0];
    if (this.state.project) return <ProjectPage {...activeProject} goToAllProjects={this.goToAllProjects} />
    return null;
  }
}

const projects = [
  { title: 'Blackjack', 
    img: require('./../../assets/blackjack.jpg'), 
    pictures: [
      { 
        src: require('../../assets/blackjack2.png'), 
        alt: 'Menu Screen' 
      },
      { 
        src: require('../../assets/blackjack3.png'), 
        alt: 'Flashcard Screen' 
      },
      { 
        src: require('../../assets/blackjack4.png'), 
        alt: 'Stats Screen' 
      }
    ],  
    links: [ 'https://blackjack-app-client.herokuapp.com/', 'https://github.com/WhiteheadAaron/blackjack-client' ],
    tech: 'This app uses React and Redux for the front end. For the backend it uses Node, Express, and MongoDB.',
    description: 'This is an app that allows you to play the classic casino game, Blackjack. You start with $100, can bet as much or as little as you want, and can view your career stats on your profile page.' 
  },

  { title: 'Learning Spanish', 
    img: require('./../../assets/spanish.png'), 
    pictures: [
      { 
        src: require('../../assets/spanish3.png'), 
        alt: 'Menu Screen' 
      },
      { 
        src: require('../../assets/spanish2.png'), 
        alt: 'Flashcard Screen' 
      },
      { 
        src: require('../../assets/spanish4.png'), 
        alt: 'Stats Screen' 
      }
    ], 
    links: [ 'https://learn-spanish-app.herokuapp.com/', 'https://github.com/thinkful-ei24/aaron-janet-spaced-repetition-client' ],
    tech: 'This app uses React and Redux for the front end. For the backend it uses Node, Express, and MongoDB.',
    description: 'This is a flashcard app to help people learn basic spanish words. It uses a spaced repetition algorithm to show you words that you are struggling with more frequently. It also keeps track of your total correct and incorrect answers.' 
  },

  { title: 'Truckd', 
    img: require('./../../assets/truckd.png'),
    pictures: [
      { 
        src: require('../../assets/truckd.png'), 
        alt: 'Menu Screen' 
      },
      { 
        src: require('../../assets/truckd2.png'), 
        alt: 'Flashcard Screen' 
      },
      { 
        src: require('../../assets/truckd3.png'), 
        alt: 'Stats Screen' 
      }
    ],  
    links: [ 'https://mountain-men-truckd.herokuapp.com/', 'https://github.com/thinkful-ei24/mountain-men-client' ],
    tech: 'This app uses React and Redux for the front end. For the backend it uses Node, Express, and MongoDB.',
    description: "This app allows users to connect with each other through their location and either acquire or rent out a truck to help them move things. Users can see who has bid on their job, and how much the bid is for. If both parties accept a bid, they are given the other person's contact information." 
  },
];

const generateProjects = chooseProject => {

  let shouldTransition = false;
  if (window.MountedList.projects === false) {
    shouldTransition = true;
    window.MountedList.projects = true;
  }

  return projects.map((proj, i) => {

    const projectAnimation = useSpring({
      from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
      to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      delay: (i + 1) * 400,
      config: config.wobbly,
    });

    return (
      <ProjectWrapper onClick={() => chooseProject(proj.title)} key={i} style={shouldTransition ? projectAnimation : {}}>
        <div>
          <h2 style={{ margin: '15px', textAlign: 'center' }}>{proj.title}</h2>
          <img alt={`${proj.title} screenshot`} src={proj.img} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </ProjectWrapper>
    )
  });
};

const AllProjects = ({ chooseProject }) => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ margin: '10vh 0 5vh 0', textAlign: 'center' }}>Full Stack Development Projects</h1>
      <AllProjectsWrapper>
        {generateProjects(chooseProject)}
      </AllProjectsWrapper>
    </div>
  )
}

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

const ProjectWrapper = styled(animated.div)`
  width: 30%;
  height: auto;
  margin: 15px;
  margin-top: 5vh;
  cursor: pointer;
  border: solid 1px #2d3436;
  padding: 20px;
  border-radius: 10%;

  @media (max-width: 768px) {
    width: 75%;
  }

  & div {
    transition: all 150ms linear 0s;
  }
`;

export default Projects;
