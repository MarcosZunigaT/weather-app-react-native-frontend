import React from "react";
import { Text, View } from "react-native";
import WeatherCardProps from "../types/WeatherCardProps";
import weatherCardStyle from "../styles/WeatherCardStyle";

const WeatherCard: React.FC<WeatherCardProps> = ({
  name,
  temp,
  humidity,
  description,
}) => {
  const cards = [
    {
      label: "Temperature",
      value: `${temp} °C`,
      icon: "🌡️",
      style: weatherCardStyle.cardToneWarm,
    },
    {
      label: "Humidity",
      value: `Humidity: ${humidity} %`,
      icon: "💧",
      style: weatherCardStyle.cardToneCool,
    },
    {
      label: "Clima",
      value: description,
      icon: "☁️",
      style: weatherCardStyle.cardToneNeutral,
    },
  ];

  return (
    <View style={weatherCardStyle.container}>
      <Text style={weatherCardStyle.cityName}>{name}</Text>
      {cards.map((card, index) => (
        <View key={card.label} style={[weatherCardStyle.card, card.style]}>
          <Text style={weatherCardStyle.cardIcon}>{card.icon}</Text>
          <Text style={weatherCardStyle.cardTitle}>{card.label}</Text>
          <Text style={weatherCardStyle.cardValue}>{card.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default WeatherCard;
