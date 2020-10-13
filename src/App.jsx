import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [data, setData] = useState([]);

  const url =
    "http://api.weatherstack.com/current?access_key=ad71109e5c47e7b5d05b29acffb8aebb&query=New York";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        let weatherData = {
          country: res.data.location.country,
          city: res.data.location.name,
          local_time: res.data.location.localtime,
          feels_like: res.data.current.feelslike,
          is_day: res.data.current.is_day,
          precipitation: res.data.current.precip,
          pressure: res.data.current.pressure,
          temperature: res.data.current.temperature,
          visibility: res.data.current.visibility,
          weather_description: res.data.current.weather_descriptions,
          weather_icon: res.data.current.weather_icons,
          wind_speed: res.data.current.wind_speed,
          wind_direction: res.data.current.wind_dir,
          humidity: res.data.current.humidity,
        };
        setData(weatherData);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  console.log(data);
  return (
    <div className="app">
      <Main
        city={data.city}
        local_time={data.local_time}
        weather_description={data.weather_description}
        temperature={data.temperature}
      />
      <Sidebar
        country={data.country}
        city={data.city}
        local_time={data.local_time}
        temperature={data.temperature}
        precipitation={data.precipitation}
        feels_like={data.feels_like}
        humidity={data.humidity}
        wind_speed={data.wind_speed}
        wind_direction={data.wind_direction}
        visibility={data.visibility}
        pressure={data.pressure}
      />
    </div>
  );
};

export default App;
