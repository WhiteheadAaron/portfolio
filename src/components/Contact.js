import React from "react";
import styled from 'styled-components';
import { useSpring, animated, config } from "react-spring";

const Contact = () => {

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 300px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 400,
    config: config.wobbly,
  });

  let shouldTransition = false;
  if (window.MountedList.contact === false) {
    shouldTransition = true;
    window.MountedList.contact = true;
  }

  return (
    <div style={style}>
      <div>
        <h1 style={{ marginBottom: '15px', fontSize: '26px', fontFamily: 'Lucida Console' }}>Want to build beautiful web applications with me?</h1>
        <a href='mailto:whitehead.aaron@live.com' style={{ textDecoration: 'none', fontSize: '21.5px', fontFamily: 'Verdana', color: '#CB9819' }}>whitehead.aaron@live.com</a>
        <LogoContainer style={shouldTransition ? linkAnimation : {} }>
          <div>
            <a href='https://www.linkedin.com/in/aaron-whitehead-a2a94785/' target='_blank' rel="noopener noreferrer">
              <img src={require('../assets/linkedin.png')} alt='LinkedIn' style={{ maxWidth: '100%', height: 'auto', borderRadius: '20%' }} />
            </a>
          </div>
          <div>
            <a href='https://github.com/WhiteheadAaron' target='_blank' rel="noopener noreferrer">
              <img src={require('../assets/github.png')} alt='GitHub' style={{ maxWidth: '100%', height: 'auto', borderRadius: '20%' }} />
            </a>
          </div>
        </LogoContainer>
      </div>
    </div>
  );
}

const LogoContainer = styled(animated.div)`
  justify-self: end;
  list-style-type: none;
  width: 60%;
  height: 200px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }

  & div {
    transition: all 300ms linear 0s;
    display: inline-block;
    width: 30%;
    maxWidth: 125px;
    height: auto;
    margin: 15px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 40%;
    }
  }
`;

const style = {
  width: '86%',
  maxWidth: '800px',
  height: '75vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
};

export default Contact;
