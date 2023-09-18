import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./components/Pagination";

document.body.style.backgroundColor = "#FAFAFA";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      themeMode: "light",
    };

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
              element={<News theme={this.state.themeMode} />}></Route>
          </Routes>
          <Pagination />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
