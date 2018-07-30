import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMap from "../components/googlemap";

class WeatherList extends Component {
  renderWeather(cityData) {

    const { lon, lat } = cityData.city.coord;
console.log(lon)
    return (

        <GoogleMap lon={lon} lat={lat} />

    );
  }

  render() {
    return (
<div>
          {this.props.weather.map(this.renderWeather)}

</div>
    );
  }
}
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
