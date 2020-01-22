import React from 'react'
import styled from "styled-components";
import logo from "../../assets/logo-min.jpg";

const Brand = props => {

  const style = () => {
    if (props.activePage === 'about') return { cursor: 'default' };
    return {};
  };

  return (
    <Image 
      alt="Picture of Aaron" 
      onClick={() => {
        props.setNewPage('about');
        if (props.navbarOpen === true) props.handleNavbar();
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