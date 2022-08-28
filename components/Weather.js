import React, { useState, useEffect } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=ba71be1f648c0f1670bfeba150347064
        `
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            name: json.name,
            main: json.weather[0].main,
            temp: json.main.temp,
            country: json.sys.country,
            humidity: json.main.humidity,
            pressure: json.main.pressure,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);
  const [forecastInfo, setForecastInfo] = useState({
    name: 'N/A',
    country: 'N/A',
    main: 'N/A',
    temp: 0,
    humidity: 0,
    pressure: 0,
  });
  return (
    <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
      <Text>Zip Code</Text>
      <Text>{props.zipCode}</Text>
      <Forecast {...forecastInfo} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
});
