import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//export const FETCH_WEATHER = "FETCH_WEATHER";

function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);

console.log(request)
  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}
export default fetchWeather
