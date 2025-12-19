import { TouchableOpacity, Text } from "react-native";
import weatherScreenStyles from "../styles/WeatherScreenStyle";
import BaseButtonProps from "../types/BaseButtonProps";

const BaseButton: React.FC<BaseButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={weatherScreenStyles.button} onPress={onPress}>
      <Text style={weatherScreenStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
