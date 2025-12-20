import { GetWeatherByCityUseCase } from "../src/application/useCases/GetWeatherByCityUseCase";
import { WeatherData } from "../src/domain/entities/WeatherData";
import { IWeatherRepository } from "../src/domain/repositories/IWeatherRespository";

describe("GetWeatherByCityUseCase - Success cases", () => {
  let weatherRepoMock: jest.Mocked<IWeatherRepository>;
  let getWeatherUseCase: GetWeatherByCityUseCase;

  beforeEach(() => {
    weatherRepoMock = {
      getWeatherData: jest.fn(),
    };

    getWeatherUseCase = new GetWeatherByCityUseCase(weatherRepoMock);
  });

  it("debe retornar WeatherData correcto cuando la ciudad existe", async () => {
    const cityName = "Estelí";

    const mockData = new WeatherData(cityName, 30, 70, "Soleado");

    weatherRepoMock.getWeatherData.mockResolvedValue(mockData);

    const result = await getWeatherUseCase.execute(cityName);

    expect(result).toEqual(mockData);
    expect(result).toBeInstanceOf(WeatherData);
    expect(weatherRepoMock.getWeatherData).toHaveBeenCalledWith(cityName);
  });

  it("debe retornar WeatherData con valores distintos para otra ciudad", async () => {
    const cityName = "Granada";

    const mockData = new WeatherData(cityName, 30, 70, "Soleado");

    weatherRepoMock.getWeatherData.mockResolvedValue(mockData);

    const result = await getWeatherUseCase.execute(cityName);

    expect(result).toEqual(mockData);
    expect(result).toBeInstanceOf(WeatherData);
    expect(weatherRepoMock.getWeatherData).toHaveBeenCalledWith(cityName);
  });
});
