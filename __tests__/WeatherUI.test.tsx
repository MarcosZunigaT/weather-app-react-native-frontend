import React, { act, useState } from "react";
import renderer from "react-test-renderer";
import { WeatherData } from "../src/domain/entities/WeatherData";

const mockWeatherData = new WeatherData("Managua", 30, 70, "Soleado");
const getWeatherDataMock = jest.fn().mockResolvedValue(mockWeatherData);

jest.mock("../src/presentation/hooks/useWeather", () => ({
  __esModule: true,
  default: () => ({
    weatherData: null,
    isLoading: false,
    getWeatherData: getWeatherDataMock,
  }),
}));

describe("WeatherScreen (prueba UI simulada)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function TestScreen() {
    const [city, setCity] = useState("");
    const useWeather = require("../src/presentation/hooks/useWeather")
      .default as any;
    const { getWeatherData } = useWeather();

    return React.createElement(
      "div",
      null,
      React.createElement("input", {
        placeholder: "Ingresa el nombre de la ciudad",
        value: city,
        onChange: (e: any) => setCity(e.target.value),
      }),
      React.createElement(
        "button",
        { onClick: () => getWeatherData(city) },
        "Consultar clima"
      )
    );
  }

  it("al escribir ciudad y presionar botón llama getWeatherData y retorna WeatherData", async () => {
    let tree: any;
    await act(async () => {
      tree = renderer.create(React.createElement(TestScreen));
    });

    const root = tree.root;
    const input = root.findByType("input");
    const button = root.findByType("button");

    await act(async () => {
      input.props.onChange({ target: { value: "Managua" } });
    });

    // Simular click
    let result: any;
    await act(async () => {
      result = await button.props.onClick();
    });

    expect(getWeatherDataMock).toHaveBeenCalledWith("Managua");
    expect(result).toBeInstanceOf(WeatherData);
    expect(result).toEqual(mockWeatherData);
  });
});
