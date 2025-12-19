import WeatherDataProps from "./WeatherDataProps";

export type UseWeatherResult = {
    weatherData: WeatherDataProps | null;
    isLoading: boolean;
    getWeatherData: (cityName: string) => Promise<WeatherDataProps | undefined>;
};

export default UseWeatherResult;
