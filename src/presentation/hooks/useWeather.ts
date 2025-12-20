import { useMemo, useState, useCallback, useContext } from "react";
import type { UseWeatherResult } from "../types/UseWeatherResultProps";
import { WeatherData } from "../../domain/entities/WeatherData";
import type { GetWeatherByCityUseCase } from "../../application/useCases/GetWeatherByCityUseCase";
import { useWeatherContext } from "../context/WeatherContext";
import AlertHandler from "../utils/AlertHandler";

// El hook toma opcionalmente un use case inyectado; si no se pasa, intenta
// obtenerlo desde el `WeatherProvider` vía Context.
const useWeather = (
  injectedGetWeatherByCityUseCase?: GetWeatherByCityUseCase
): UseWeatherResult => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const context = (() => {
    try {
      return useWeatherContext();
    } catch {
      return undefined as any;
    }
  })();

  const getWeatherByCityUseCase =
    injectedGetWeatherByCityUseCase ?? context?.getWeatherByCityUseCase;

  if (!getWeatherByCityUseCase) {
    AlertHandler.showError("Error al inyectar dependencia");
  }

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
        if (data === null) {
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
    [getWeatherByCityUseCase]
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
