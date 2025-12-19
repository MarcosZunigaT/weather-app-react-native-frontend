export interface IWeatherRepository {
    getWeatherData(cityName: string): Promise<any>;
}