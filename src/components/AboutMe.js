import React from "react";
import styled from 'styled-components';
import { useSpring, animated, config } from "react-spring";

const AboutMe = () => {

  const descriptionAnimation = useSpring({
    from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 1200,
    config: config.wobbly,
  });

  let shouldTransition = false;
  if (window.MountedList.home === false) {
    shouldTransition = true;
    window.MountedList.home = true;
  }

  return (
    <div style={style}>
      <Div style={shouldTransition ? descriptionAnimation : {} }>
        <h1 style={{ marginBottom: '5px', fontSize: '30px', fontFamily: 'Lucida Console' }}>Hi, I'm Aaron.</h1>
        <p style={{ marginBottom: '25px', fontSize: '22px', fontFamily: 'Verdana', color: '#CB9819 ' }}>Full Stack Developer.</p>
        <p style={{ fontSize: '21px', fontFamily: 'Verdana' }}>I love coding, solving big problems, visiting National Parks, watching sports, and playing video games.</p>
      </Div>
    </div>
  );
}

const Div = styled(animated.div)`

  & p {
    transition: all 300ms linear 0s;
    display: inline-block;
  }
`;

const style = {
  width: '75%',
  maxWidth: '700px',
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
};

export default AboutMe;
