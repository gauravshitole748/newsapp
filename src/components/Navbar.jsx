import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      theme: "light",
    };
  }

  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg sticky-top bg-body-secondary"
          data-bs-theme={this.props.theme}>
          <div
            className="container-fluid"
            style={{ marginLeft: "0px", paddingLeft: "0px " }}>
            <Link className="navbar-brand" to="/"></Link>
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
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  data-bs-theme={this.props.theme}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={this.props.themeHandle}
                />
                <label
                  className={
                    this.props.theme === "light"
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
