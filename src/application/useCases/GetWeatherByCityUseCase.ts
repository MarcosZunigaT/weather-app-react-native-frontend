import { WeatherData } from '../../domain/entities/WeatherData';
import type { IWeatherRepository } from '../../domain/repositories/IWeatherRespository';

export class GetWeatherByCityUseCase {
    constructor(private weatherRepository: IWeatherRepository) {}

    async execute(cityName: string): Promise<WeatherData | null> {
        return this.weatherRepository.getWeatherData(cityName);
    }
}