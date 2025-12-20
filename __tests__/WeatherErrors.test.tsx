import { GetWeatherByCityUseCase } from "../src/application/useCases/GetWeatherByCityUseCase";
import { IWeatherRepository } from "../src/domain/repositories/IWeatherRespository";

describe("GetWeatherError - Ciudad no encontrada", () => {
  let weatherRepoMock: jest.Mocked<IWeatherRepository>;
  let getWeatherUseCase: GetWeatherByCityUseCase;

  beforeEach(() => {
    weatherRepoMock = {
      getWeatherData: jest.fn(),
    };

    getWeatherUseCase = new GetWeatherByCityUseCase(weatherRepoMock);
  });

  it("Debe retornar modelo con propiedades undefined", async () => {
    const cityName = "CiudadInexistente";

    weatherRepoMock.getWeatherData.mockResolvedValue(null);

    const result = await getWeatherUseCase.execute(cityName);

    expect(result).toBeNull();
  });

  it("Debe manejar valor vacio", async () => {
    const cityName = "";

    weatherRepoMock.getWeatherData.mockResolvedValue(null);

    const result = await getWeatherUseCase.execute(cityName);

    expect(result).toBeNull();
  });
});
