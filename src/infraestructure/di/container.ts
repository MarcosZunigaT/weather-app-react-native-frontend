import { WeatherRepositoryImpl } from '../repositories/WeatherRepositoryImpl';
import { GetWeatherByCityUseCase } from '../../application/useCases/GetWeatherByCityUseCase';

export function createContainer() {
  const weatherRepository = new WeatherRepositoryImpl();
  const getWeatherByCityUseCase = new GetWeatherByCityUseCase(weatherRepository);

  return {
    weatherRepository,
    getWeatherByCityUseCase,
  };
}

export const container = createContainer();
