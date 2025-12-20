import React, { act, useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { WeatherData } from "../src/domain/entities/WeatherData";
import WeatherScreen from "../src/presentation/screens/WeatherScreen";

const mockWeatherData = new WeatherData("Managua", 30, 70, "Soleado");
const mockGetWeatherData = jest.fn().mockResolvedValue(mockWeatherData);

jest.mock("../src/presentation/hooks/useWeather", () => ({
  __esModule: true,
  default: () => ({
    weatherData: null,
    isLoading: false,
    getWeatherData: mockGetWeatherData,
  }),
}));

describe("WeatherScreen (prueba UI simulada)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Al escribir ciudad y presionar botón llama getWeatherData y retorna WeatherData", async () => {
    render(<WeatherScreen />);

    const input = await screen.findByPlaceholderText(
      "Ingresa el nombre de la ciudad"
    );
    const button = await screen.findByText("Consultar clima");

    fireEvent.changeText(input, "Managua");

    fireEvent.press(button);

    const result = await mockGetWeatherData.mock.results[0].value;

    expect(mockGetWeatherData).toHaveBeenCalledWith("Managua");
    expect(input.props.value).toBe("Managua");
    expect(result).toEqual(mockWeatherData);
    expect(result).toBeInstanceOf(WeatherData);
    expect(mockGetWeatherData).toHaveBeenCalledTimes(1);
  });
});
