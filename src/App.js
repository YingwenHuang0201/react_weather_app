import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          by Yingwen Huang{" "}
          <a
            href="https://github.com/YingwenHuang0201/react_weather_app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
