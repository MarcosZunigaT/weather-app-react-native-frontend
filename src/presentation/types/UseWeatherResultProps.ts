import { WeatherData } from "../../domain/entities/WeatherData";

export type UseWeatherResult = {
    weatherData: WeatherData | null;
    isLoading: boolean;
    getWeatherData: (cityName: string) => Promise<WeatherData | null>;
};
