import { useMemo, useState, useCallback } from "react";
import type { UseWeatherResult } from "../types/UseWeatherResultProps";
import { WeatherData } from "../../domain/entities/WeatherData";
import { GetWeatherByCityUseCase } from "../../application/useCases/GetWeatherByCityUseCase";
import { WeatherRepositoryImpl } from "../../infraestructure/repositories/WeatherRepositoryImpl";
import AlertHandler from "../utils/alertHandler";

const weatherRepository = new WeatherRepositoryImpl();
const getWeatherByCityUseCase = new GetWeatherByCityUseCase(weatherRepository);

const useWeather = (): UseWeatherResult => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeatherData = useCallback(
    async (cityName: string): Promise<WeatherData | null> => {
      setIsLoading(true);
      try {
        if (cityName.length === 0) {
          AlertHandler.showError(
            "El nombre de la ciudad no puede estar vacío."
          );
          setIsLoading(false);
          return null;
        }
        const data = await getWeatherByCityUseCase.execute(cityName);
        if (
          data !== null &&
          (data.description === undefined ||
            data.humidity === undefined ||
            data.temp === undefined ||
            data.name === undefined)
        ) {
          AlertHandler.showError("Ciudad no encontrada.");
          return null;
        }
        setWeatherData(data);
        return data;
      } catch (error) {
        AlertHandler.showError(`Ha ocurrido un error ${error}`);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const result = useMemo<UseWeatherResult>(
    () => ({
      weatherData,
      isLoading,
      getWeatherData,
    }),
    [weatherData, isLoading, getWeatherData]
  );

  return result;
};

export default useWeather;
