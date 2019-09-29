import React, { Component } from "react";

import UnGuessingUI from "unguessing-ui";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="d-flex-justify-between d-flex d-flex-align-center">
            <h1 className="color-dark fs-3 color-variant">Runners</h1>
            <nav>
              <ul className="d-flex-justify-between d-flex">
                <li>
                  <a
                    className="color-variant fs-4 m-left-30 link-menu link-menu-actived"
                    href="/#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="color-variant fs-4 m-left-30 link-menu"
                    href="/#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="color-variant fs-4 m-left-30 link-menu"
                    href="/#"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="color-variant fs-4 m-left-30 link-menu"
                    href="/#"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="apresentation">
          <div className="container">
            <div className="d-flex">
              <div className="sm-6-12">
                <div className="content">
                  <h2 className="color-variant custom-font fs-1 m-bottom-30">
                    Run together.
                    <br />
                    Improve individually.
                  </h2>
                  <p className="color-dark m-bottom-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse pretium felis purus, tincidunt sollicitudin nisi
                    iaculis ut.
                  </p>
                  <div className="m-bottom-30">
                    <a className="m-right-10 btn actived" href="/#">
                      Explore
                    </a>
                    <a className="m-right-10 btn" href="/#">
                      Sign up
                    </a>
                  </div>
                  <ul>
                    <ul className="d-flex">
                      <li className="m-right-10">
                        <a className="social-media-icon" href="/#">
                          Facebook
                        </a>
                      </li>
                      <li className="m-right-10">
                        <a
                          className="social-media-icon social-media-icon-instagram"
                          href="/#"
                        >
                          Instagram
                        </a>
                      </li>
                      <li className="m-right-10">
                        <a
                          className="social-media-icon social-media-icon-twitter"
                          href="/#"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="sm-6-12">
                <div className="model"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnGuessingUI(App);
