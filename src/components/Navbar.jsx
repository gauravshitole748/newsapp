import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      theme: "light",
    };
    //    console.log(this.state.theme);
    //Need to do this to make below functions can use "this"
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    // console.log(this.state);
    let theme = this.state.theme === "light" ? "dark" : "light";
    // console.log(this.state);
    this.setState({
      theme,
    });
    // console.log(this.state);
  }

  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg sticky-top bg-body-secondary"
          data-bs-theme={this.state.theme}>
          <div
            className="container-fluid"
            style={{ marginLeft: "0px", paddingLeft: "0px " }}>
            <a className="navbar-brand" href="#"></a>
            {/* added flex for AirNews text */}
            <div
              className="d-flex flex-row"
              style={{ margin: "0px 6px 0px 0px", padding: "0px" }}>
              <h5 style={{ margin: "0px", padding: "0px", color: "blue" }}>
                Air
              </h5>
              <h5 style={{ margin: "0px", color: "red" }}>News</h5>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  data-bs-theme={this.state.theme}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.toggleTheme}
                />
                <label
                  className={
                    this.state.theme === "light"
                      ? "form-check-label text-dark-emphasis"
                      : "form-check-label text-light-emphasis"
                  }
                  htmlFor="flexSwitchCheckDefault">
                  Dark
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
