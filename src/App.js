import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

document.body.style.backgroundColor = "#FAFAFA";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      themeMode: "light",
      progress: 0,
    };
    this.myRef = React.createRef(null);

    // bindings
    this.setTheme = this.setTheme.bind(this);
  }

  setTheme() {
    //console.log("inside setTheme");
    this.setState({
      themeMode: this.state.themeMode === "light" ? "dark" : "light",
    });
    document.body.style.backgroundColor =
      this.state.themeMode === "light" ? "#2b3030" : "#FAFAFA";
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar themeHandle={this.setTheme} theme={this.state.themeMode} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News newsCat={"general"} theme={this.state.themeMode} />
              }></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="/business"
                  newsCat={"business"}
                  theme={this.state.themeMode}
                />
              }></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="/entertainment"
                  newsCat={"entertainment"}
                  theme={this.state.themeMode}
                />
              }></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="/health"
                  newsCat={"health"}
                  theme={this.state.themeMode}
                />
              }></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="/science"
                  newsCat={"science"}
                  theme={this.state.themeMode}
                />
              }></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="/sports"
                  newsCat={"sports"}
                  theme={this.state.themeMode}
                />
              }></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="/technology"
                  newsCat={"technology"}
                  theme={this.state.themeMode}
                />
              }></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
