import { WeatherData } from "../../domain/entities/WeatherData";
import request from "./HttpClient";

const weatherApi = {
  async getWeatherData(cityName: string): Promise<WeatherData | null> {
    try {
      const path = `/weather?city=${encodeURIComponent(cityName)}`;
      const data = await request(path);
      if (data !== undefined) {
        const weatherData = WeatherData.fromJSON(data);
        console.log("weatherData", weatherData);
        if (weatherData.isEmpty()) {
          return null;
        }
        return weatherData;
      }
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default weatherApi;
