import React, { Component, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

document.body.style.backgroundColor = "#FAFAFA";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}

export default App;
