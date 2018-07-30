import React from "react";
import { Component } from "react";
import SearchBox from "../containers/vanilai_thedal";
import WeatherList from "../containers/list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBox />
  <WeatherList />
      </div>
    );
  }
}
