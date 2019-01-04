import React, { Component } from "react";
import "./index.css";
import "./medium.css";
import "./small.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="help">
          <div className="nav">
            <h1>
              <a href="#home">Aaron Whitehead</a>
            </h1>
            <div className="navItems">
              <button>
                <a href="#projects">Projects</a>
              </button>
              <button>
                <a href="#contact">Contact</a>
              </button>
            </div>
          </div>
        </div>
        <div className="firstGrid" id="home">
          <img
            src={require("./images/me.jpg")}
            alt="Aaron"
            className="profPic"
          />
          <p className="headerFS">
            My name is Aaron, and I'm a full stack web developer. I'm based in
            Phoenix, Arizona. Below I have some projects that I've built along
            my journey as a developer, as well as some more information about
            me!
          </p>
          {/* <button className="projectsButton">Projects</button>
          <button className="aboutButton">About Me</button>
          <button className="contactButton">Contact Me</button> */}
        </div>
        {/* <div className="aboutMeGrid">
        
       
        </div> */}
        <div className="navHelper" id="projects" />
        <div className="secondGrid">
          <div className="projectOne">
            <h2>BlackJack</h2>
            <img
              src={require("./images/blackjack.jpg")}
              alt="Screenshot of App"
              className="blackjackPic"
            />
            <div className="pBox">
              <p>
                This application is just what it sounds like; a place to play
                the popular casino game blackjack. Your account gets $100 by
                default, and you decide how much you would like to bet before
                the hand starts.
              </p>
              <div className="headBox">
                <a
                  href="https://blackjack-app-client.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Live Version</h3>
                </a>
                <a
                  href="https://github.com/WhiteheadAaron/blackjack-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>GitHub File</h3>
                </a>
              </div>

              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic mongo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdGrid">
          <div className="projectFive">
            <h2>Truck'd</h2>
            <img
              src={require("./images/truckd.png")}
              alt="Screenshot of App"
              className="blackjackPic truckPic"
            />
            <div className="pBox">
              <p>
                This was a collaboration with 4 other developers. Truck'd is an
                app where people in need of trucks are matched with people who
                have trucks. There is a more detailed description in the GitHub
                ReadMe!
              </p>
              <div className="headBox">
                <a
                  href="https://mountain-men-truckd.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Live Version</h3>
                </a>
                <a
                  href="https://github.com/thinkful-ei24/mountain-men-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>GitHub File</h3>
                </a>
              </div>

              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic mongo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fourthGrid">
          <div className="projectTwo">
            <h2>Learning Spanish</h2>
            <img
              src={require("./images/dashboard.png")}
              alt="Screenshot of App"
              className="learnSpanishPic blackjackPic"
            />
            <div className="pBox">
              <p>
                This application is a learning app meant to help people learn
                Spanish. It was made in collaboration with developer Janet Leon.
              </p>
              <div className="headBox">
                <a
                  href="https://learn-spanish-app.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Live Version</h3>
                </a>
                <a
                  href="https://github.com/thinkful-ei24/aaron-janet-spaced-repetition-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>GitHub File</h3>
                </a>
              </div>

              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic mongo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fifthGrid">
          <div className="projectThree">
            <h2>DSM Dynasty</h2>
            <img
              src={require("./images/dsm.png")}
              alt="Screenshot of App"
              className="dsmPic blackjackPic"
            />
            <div className="pBox">
              <p>
                This application is for my personal fantasy football league.
                It's still in development, but it's the way I plan on keeping
                track of long term stats for our league.
              </p>
              <div className="headBox">
                <a
                  href="https://dsm-dynasty.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Live Version</h3>
                </a>
                <a
                  href="https://github.com/WhiteheadAaron/DSM-Dynasty-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>GitHub File</h3>
                </a>
              </div>

              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic mongo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sixthGrid">
          <div className="projectFour">
            <h2>Whitehead Tax Service</h2>
            <img
              src={require("./images/wts.jpg")}
              alt="Screenshot of App"
              className="blackjackPic"
            />
            <div className="pBox">
              <p>
                This application is something I made for my father's tax
                business. This is a version for demo purposes, as you can see by
                the results page.
              </p>
              <div className="headBox">
                <a
                  href="https://whitehead-tax-service.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Live Version</h3>
                </a>
                <a
                  href="https://github.com/WhiteheadAaron/whitehead-tax-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>GitHub File</h3>
                </a>
              </div>

              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a
                  href="https://api.jquery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/jquery.jpg")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic mongo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <p>
            When I'm not writing code, I like to keep busy. These are just a few of my other interests.
          </p>
          <ul>
            <li>I love playing and watching sports, especially soccer</li>
            <li>
              Being outdoors is a passion of mine, I take a trip to a National
              Park yearly
            </li>
            <li>
              I play a lot of video games when time permits. My current game of
              choice is Rocket League. Play on Steam? Let's game!
            </li>
          </ul>
        </div>
        <div className="company">
          <p>
            I am currently available for employment. My ideal employer would
            look something like this:
          </p>
          <ul>
            <li>
              Fast paced team environment with room to grow as a developer and a
              person
            </li>
            <li>
              Somewhere with strong team communication. I'm at my best when I
              have clear goals to work towards
            </li>
          </ul>
        </div>
        <div className="hello" id="contact">
          <p>Think I would be a good fit at your company? Contact me through any of the below methods.</p>
        </div>
        <div className="contact">
          <h2>Contact Me</h2>
          <div className="contactPics">
            <div className="email">
              <a href="mailto: whitehead.aaron@live.com">
                <img
                  src={require("./images/email.jpg")}
                  alt="Email Logo"
                  className="emailPic"
                />
              </a>
            </div>
            <div className="linked">
              <a
                href="https://www.linkedin.com/in/aaron-whitehead-a2a94785"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/linkedin.png")}
                  alt="LinkedIn Logo"
                  className="linkedIn"
                />
              </a>
            </div>
            <div className="git">
              <a
                href="https://github.com/WhiteheadAaron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./images/GitHub.png")}
                  alt="GitHub Logo"
                  className="gitHubPic"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
