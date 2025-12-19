import { useMemo, useState, useCallback } from 'react';
import UseWeatherResult from '../types/UseWeatherResultProps';
import WeatherDataProps from '../types/WeatherDataProps';

const useWeather = (): UseWeatherResult => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getWeatherData = useCallback(async (cityName: string): Promise<WeatherDataProps | undefined> => {
        setIsLoading(true);
        try {
            const data = await new Promise<WeatherDataProps>((resolve) => {
                setTimeout(() => {
                    resolve({
                        name: cityName,
                        temp: 25,
                        humidity: 60,
                        description: 'Sunny',
                    });
                }, 1000);
            });
            setWeatherData(data);
            return data;
        } catch (error) {
            return undefined;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const result = useMemo<UseWeatherResult>(() => ({
        weatherData,
        isLoading,
        getWeatherData,
    }), [weatherData, isLoading, getWeatherData]);

    return result;
};

export default useWeather;

