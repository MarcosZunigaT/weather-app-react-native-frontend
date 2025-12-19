import { WeatherRepositoryImpl } from '../repositories/WeatherRepositoryImpl';
import { GetWeatherByCityUseCase } from '../../application/useCases/GetWeatherByCityUseCase';

// Contenedor simple de dependencias. Si en el futuro necesitas reemplazar
// implementaciones para pruebas o entornos, hazlo aquí.
export function createContainer() {
  const weatherRepository = new WeatherRepositoryImpl();
  const getWeatherByCityUseCase = new GetWeatherByCityUseCase(weatherRepository);

  return {
    weatherRepository,
    getWeatherByCityUseCase,
  };
}

export const container = createContainer();
