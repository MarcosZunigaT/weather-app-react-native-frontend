import { WeatherData } from "../../domain/entities/WeatherData";
import type { IWeatherRepository } from "../../domain/repositories/IWeatherRespository";
import weatherApi from "../api/WeatherApi";

export class WeatherRepositoryImpl implements IWeatherRepository {
  async getWeatherData(cityName: string): Promise<WeatherData | null> {
    try {
      const data = await weatherApi.getWeatherData(cityName);
      if (data !== null) {
        const weatherData = WeatherData.fromJSON(data);
        return weatherData;
      }
      return data;
    } catch (error) {
      return null;
    }
  }
}
