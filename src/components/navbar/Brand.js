import React from 'react'
import styled from "styled-components";
import logo from "../../assets/logo-min.jpg";

const Brand = props => {

  const style = () => {
    const styleObj = { borderRadius: '20%' }
    if (props.activePage === 'about') styleObj.cursor = 'default';
    return styleObj;
  };

  return (
    <Image 
      alt="Picture of Aaron" 
      onClick={() => {
        props.setNewPage('about');
        if (props.navbarOpen === true && props.activePage !== 'about') {
          props.handleNavbar();
        }
      }} 
      src={logo}
      style={style()}
    />
  )
}

export default Brand

const Image = styled.img`
  height: 75%;
  margin: auto 0;
  cursor: pointer;
`;