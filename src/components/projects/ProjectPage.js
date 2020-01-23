import React, { Component } from "react";
import styled from 'styled-components';
import { useSpring, animated, config } from "react-spring";

let transitioning = false;

class ProjectPage extends Component {

  render() {

    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '1300px' }}>
        <div style={{ margin: 'auto', marginTop: '5vh', marginBottom: '5vh', textAlign: 'center', display: 'flex', justifyContent: 'center', width: '90%' }}>
          <Arrow onClick={this.props.goToAllProjects} />
          <h1 style={{ fontSize: '24px' }}>{this.props.title}</h1>
        </div>
        <Pictures pictures={this.props.pictures} title={this.props.title} />
        <Description description={this.props.description} />
        <TechStacks tech={this.props.tech} />
        <Links links={this.props.links} />
      </div>
    );
  }
}

const Arrow = styled.button`
	width: 25px;
  height: 25px;
  transform: rotate(-135deg);
  background: transparent;
  border: none;
	border-top: 5px solid #2d3436;
	border-right: 5px solid #2d3436;
  transition: all 150ms ease;
  outline: none;
  margin: 0 15px 0 0;
  padding: 0;
  cursor: pointer;
  
  &:hover {
		border-color: #CB9819;
		box-shadow: 0.5vmin -0.5vmin 0 #2d3436;
	}
	
	&:before {
		content: '';
		transform: rotate(45deg);
		width: 200%;
		height: 200%;
  }
`;

const Pictures = props => {
  const { pictures, title } = props;

  let shouldTransition = false;
  if (window.MountedList[title] === false) {
    shouldTransition = true;
    transitioning = true;
    window.MountedList[title] = true;
  }


  return (
    <AllPicturesWrapper>
      {pictures.map((pic, i) => {
        const pictureAnimation = useSpring({
          from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
          to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
          delay: (i + 1) * 400,
          config: config.wobbly,
        });

        return (
          <Pic style={shouldTransition ? pictureAnimation : {}} key={i}>
            <img alt={pic.alt} src={pic.src} style={{ maxWidth: '100%', height: 'auto' }} />
          </Pic>
        )
      })}
    </AllPicturesWrapper>
  )
}

const Pic = styled(animated.div)`
  width: 27.5%;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 70%;
  }
`
const AllPicturesWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = props => {

  const pictureAnimation = useSpring({
    from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 1600,
    config: config.wobbly,
  });

  return (
    <Desc style={transitioning ? pictureAnimation : {}}>
      <p>{props.description}</p>
    </Desc>
  )
}

const Desc = styled(animated.div)`
  width: 95%;
  height: auto;
  margin: auto;
  margin-top: 20px;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const TechStacks = props => {

  const pictureAnimation = useSpring({
    from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 2000,
    config: config.wobbly,
  });

  return (
    <Stack style={transitioning ? pictureAnimation : {}}>
      <h2 style={{ fontSize: '22px' }}>Tech Stacks:</h2><p style={{ margin: '10px' }}>{props.tech}</p>
    </Stack>
  )
}

const Stack = styled(animated.div)`
  width: 95%;
  height: auto;
  margin: auto;
  margin-top: 20px;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Links = props => {

  const pictureAnimation = useSpring({
    from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 2400,
    config: config.wobbly,
  });

  const showTransition = transitioning;
  transitioning = false;

  return (
    <Link style={showTransition ? pictureAnimation : {}}>
      <Button href={props.links[0]} target='_blank'>
        Live Site
      </Button>
      <Button href={props.links[1]} target='_blank'>
        GitHub Repo
      </Button>
    </Link>
  )
}

const Button = styled.a`
  position: relative;
  background: none;
  color: #2d3436;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid #2d3436;
  padding: 0.5em 1em;
  margin: 20px;
  width: 250px;
  text-align: center;
  outline: none;

  &:hover {
    color: #CB9819;
    border: 0.2em solid #CB9819;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    width: 120px;
  }
`;

const Link = styled(animated.div)`
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 20px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 300px;
  }
`;

export default ProjectPage;
