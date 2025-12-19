import React from "react";
import { TextInput } from "react-native";
import weatherScreenStyles from "../styles/WeatherScreenStyle";
import BaseInputProps from "../types/BaseInputProps";

const BaseInput: React.FC<BaseInputProps> = ({
  cityName,
  setCityName,
  isfocused,
  setIsFocused,
}) => {
  return (
    <TextInput
      style={[
        weatherScreenStyles.input,
        isfocused && weatherScreenStyles.inputFocused,
      ]}
      placeholder="Ingresa el nombre de la ciudad"
      value={cityName}
      onChangeText={setCityName}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default BaseInput;
