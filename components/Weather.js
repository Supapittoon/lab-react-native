import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
  useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=ba71be1f648c0f1670bfeba150347064`
      )
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            name: json.name,
            main: json.weather[0].main,
            temp: json.main.temp,
            country: json.sys.country,
            wind_speed: json.wind.speed,
            humidity: json.main.humidity,
          });
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode]);

  const [forecastInfo, setForecastInfo] = useState({
    name: "N/A",
    country: "N/A",
    main: "N/A",
    temp: 0,
    wind_speed: 0,
    humidity: 0,
  });

  return (
    <View>
      <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
        <View style={styles.box}>
          <Text style={styles.text}>Zip Code : {props.zipCode}</Text>
          <Forecast {...forecastInfo} />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  backdrop: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    paddingTop: 20,
    color: "white",
  },
});
