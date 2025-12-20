import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import WeatherScreen from "../src/presentation/screens/WeatherScreen";
import { WeatherData } from "../src/domain/entities/WeatherData";

// Mock de useWeather
const mockWeatherData = new WeatherData("Managua", 30, 70, "Soleado");

const getWeatherDataMock = jest.fn().mockResolvedValue(mockWeatherData);

export const renderHookWithButton = () => {
  return render(<WeatherScreen />);
};

jest.mock("../src/presentation/hooks/useWeather", () => ({
  __esModule: true,
  default: () => ({
    weatherData: null,
    isLoading: false,
    getWeatherData: getWeatherDataMock,
  }),
}));

// Mock de WeatherCard para que no rompa el render
jest.mock("../src/presentation/components/WeatherCard", () => () => null);

describe("WeatherScreen - Interacción completa", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("al escribir ciudad y presionar botón llama getWeatherData y retorna WeatherData", async () => {
    const { getByPlaceholderText, getByText } = renderHookWithButton();

    // Simular escritura en el input
    const input = getByPlaceholderText("Escribe tu ciudad"); // Ajusta según placeholder real
    fireEvent.changeText(input, "Managua");

    // Presionar botón
    const button = getByText("Consultar clima");
    fireEvent.press(button);

    // Esperar que la promesa del hook se ejecute
    await waitFor(() => {
      expect(getWeatherDataMock).toHaveBeenCalledWith("Managua");
    });

    // Validar retorno de WeatherData
    const result = await getWeatherDataMock.mock.results[0].value;
    expect(result).toBeInstanceOf(WeatherData);
    expect(result).toEqual(mockWeatherData);
  });
});
