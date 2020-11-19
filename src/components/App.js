import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const cities = ["Goa", "Darjeeling", "Lonavala"];
    return (
      <>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </>
    );
  }
}

export default App;
