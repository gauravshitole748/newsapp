import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

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
        <Navbar themeHandle={this.setTheme} theme={this.state.themeMode} />
        <News theme={this.state.themeMode} />
      </>
    );
  }
}

export default App;
