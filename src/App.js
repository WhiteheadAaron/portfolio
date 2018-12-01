import React, { Component } from "react";
import "./index.css";
import "./medium.css";
import "./small.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="firstGrid">
          <header role="banner" className="headerBox">
            <h1 className="header">Aaron Whitehead</h1>
          </header>
          <img
            src={require("./images/me.jpg")}
            alt="Aaron"
            className="profPic"
          />
          <p className="headerFS">
            My name is Aaron, and I'm a full stack web developer. I'm based in
            Phoenix, Arizona. Below I have some projects of mine, as well as
            some more information about me!
          </p>
          {/* <button className="projectsButton">Projects</button>
          <button className="aboutButton">About Me</button>
          <button className="contactButton">Contact Me</button> */}
        </div>
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
                <h3>Live Version</h3>
                <h3>GitHub File</h3>
              </div>
              <div className="logoBox">
                <a
                  href="https://blackjack-app-client.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={require("./images/heroku.png")}
                    alt="Heroku logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://github.com/WhiteheadAaron/blackjack-client"
                  target="_blank"
                >
                  <img
                    src={require("./images/GitHub.png")}
                    alt="GitHub logo"
                    className="techPic"
                  />
                </a>
              </div>
              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a href="https://reactjs.org/" target="_blank">
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a href="https://nodejs.org/en/" target="_blank">
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a href="https://www.mongodb.com/" target="_blank">
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdGrid">
          <div className="projectTwo">
            <h2>Learning Spanish</h2>
            <img
              src={require("./images/dashboard.png")}
              alt="Screenshot of App"
              className="learnSpanishPic blackjackPic"
            />
            <div className="pBox">
              <p>
                This application is a learning app meant to help people learn Spanish. It's quite simple, and uses a spaced repetition algorithm to show users questions they struggle with more often.
              </p>
              <div className="headBox">
                <h3>Live Version</h3>
                <h3>GitHub File</h3>
              </div>
              <div className="logoBox">
                <a
                  href="https://learn-spanish-app.herokuapp.com"
                  target="_blank"
                >
                  <img
                    src={require("./images/heroku.png")}
                    alt="Heroku logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://github.com/thinkful-ei24/aaron-janet-spaced-repetition-client"
                  target="_blank"
                >
                  <img
                    src={require("./images/GitHub.png")}
                    alt="GitHub logo"
                    className="techPic"
                  />
                </a>
              </div>
              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a href="https://reactjs.org/" target="_blank">
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a href="https://nodejs.org/en/" target="_blank">
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a href="https://www.mongodb.com/" target="_blank">
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fourthGrid">
          <div className="projectThree">
            <h2>DSM Dynasty</h2>
            <img
              src={require("./images/dsm.png")}
              alt="Screenshot of App"
              className="dsmPic blackjackPic"
            />
            <div className="pBox">
              <p>
                This application is for my personal fantasy football league. It's still in development, but it's the way I plan on keeping track of long term stats for our league.
              </p>
              <div className="headBox">
                <h3>Live Version</h3>
                <h3>GitHub File</h3>
              </div>
              <div className="logoBox">
                <a
                  href="https://dsm-dynasty.herokuapp.com"
                  target="_blank"
                >
                  <img
                    src={require("./images/heroku.png")}
                    alt="Heroku logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://github.com/WhiteheadAaron/DSM-Dynasty-Client"
                  target="_blank"
                >
                  <img
                    src={require("./images/GitHub.png")}
                    alt="GitHub logo"
                    className="techPic"
                  />
                </a>
              </div>
              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a href="https://reactjs.org/" target="_blank">
                  <img
                    src={require("./images/react.png")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a href="https://nodejs.org/en/" target="_blank">
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a href="https://www.mongodb.com/" target="_blank">
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fifthGrid">
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
                <h3>Live Version</h3>
                <h3>GitHub File</h3>
              </div>
              <div className="logoBox">
                <a
                  href="https://whitehead-tax-service.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={require("./images/heroku.png")}
                    alt="Heroku logo"
                    className="techPic"
                  />
                </a>
                <a
                  href="https://github.com/WhiteheadAaron/whitehead-tax-service"
                  target="_blank"
                >
                  <img
                    src={require("./images/GitHub.png")}
                    alt="GitHub logo"
                    className="techPic"
                  />
                </a>
              </div>
              <div className="headBox">
                <h3>Tech Stacks</h3>
              </div>
              <div className="techStacks">
                <a href="https://api.jquery.com/" target="_blank">
                  <img
                    src={require("./images/jquery.jpg")}
                    alt="React logo"
                    className="techPic"
                  />
                </a>
                <a href="https://nodejs.org/en/" target="_blank">
                  <img
                    src={require("./images/node.jpg")}
                    alt="Node logo"
                    className="techPic"
                  />
                </a>
                <a href="https://www.mongodb.com/" target="_blank">
                  <img
                    src={require("./images/mongo.png")}
                    alt="MongoDB logo"
                    className="techPic"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default App;
