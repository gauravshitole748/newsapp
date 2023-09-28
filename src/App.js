import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./components/Pagination";
import LoadingBar from "react-top-loading-bar";

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
          <Navbar
            themeHandle={this.setTheme}
            theme={this.state.themeMode}
            loadingFinishHandle={() =>
              //this.myRef.current.complete()
              console.log("loadingFinishHandle called")
            }
          />
          {/* <LoadingBar height={3} color="#f11946" ref={this.myRef} /> */}
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setState({ progress: 0 })}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  initialProgress={() => this.setState({ progress: 20 })}
                  newsCat={"general"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="/business"
                  initialProgress={() => this.setState({ progress: 20 })}
                  newsCat={"business"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  initialProgress={() => this.setState({ progress: 20 })}
                  key="/entertainment"
                  newsCat={"entertainment"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  initialProgress={() => this.setState({ progress: 20 })}
                  key="/health"
                  newsCat={"health"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  initialProgress={() => this.setState({ progress: 20 })}
                  key="/science"
                  newsCat={"science"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  initialProgress={() => this.setState({ progress: 20 })}
                  key="/sports"
                  newsCat={"sports"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  initialProgress={() => this.setState({ progress: 20 })}
                  key="/technology"
                  newsCat={"technology"}
                  theme={this.state.themeMode}
                  endProgress={() => this.setState({ progress: 100 })}
                />
              }></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
