import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import weatherScreenStyles from "../styles/WeatherScreenStyle";
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import useWeather from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";

const WeatherScreen: React.FC = () => {
  const [cityName, setCityName] = useState("");
  const [isfocused, setIsFocused] = useState(false);
  const { weatherData, isLoading, getWeatherData } = useWeather();

  useEffect(() => {
    console.log("Weather Data:", weatherData);
  }, [weatherData]);

  return (
    <ScrollView
      style={weatherScreenStyles.scrollView}
      contentContainerStyle={weatherScreenStyles.contentContainer}
    >
      <View style={weatherScreenStyles.container}>
        <Text style={weatherScreenStyles.welcome}>Consulta el clima</Text>
        <BaseInput
          cityName={cityName}
          setCityName={setCityName}
          isfocused={isfocused}
          setIsFocused={setIsFocused}
        />
        {!isLoading && (
          <BaseButton
            title="Consultar clima"
            onPress={() => getWeatherData(cityName)}
          />
        )}
        {isLoading && <ActivityIndicator style={weatherScreenStyles.loader} />}
        {weatherData && !isLoading && <WeatherCard {...weatherData} />}
        <StatusBar/>
      </View>
    </ScrollView>
  );
};

export default WeatherScreen;
