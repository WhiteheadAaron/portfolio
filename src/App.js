import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
// import "./index.css";

class App extends Component {

  state = {
    page: 'about',
    navbarOpen: false
  };

  handleNavbar = () => this.setState({ navbarOpen: !this.state.navbarOpen });
  setNewPage = page => this.setState({ page });

  render() {
    const { page, navbarOpen } = this.state;
    
    return (
      <>
        <Navbar
          navbarState={navbarOpen}
          handleNavbar={this.handleNavbar}
          setNewPage={this.setNewPage}
          activePage={this.state.page}
        />
        <GlobalStyle />
        <Container>
          {page === 'about' && <AboutMe />}
          {page === 'projects' && <Projects />}
          {page === 'resume' && <Resume />}
          {page === 'contact' && <Contact />}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  margin-top: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
