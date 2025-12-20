export class WeatherData {
  name: string | null;
  temp: number | null;
  humidity: number | null;
  description: string | null;

  constructor(
    name: string | null,
    temp: number | null,
    humidity: number | null,
    description: string | null
  ) {
    this.name = name;
    this.temp = temp;
    this.humidity = humidity;
    this.description = description;
  }

  static fromJSON(obj: {
    name?: string | null;
    temp?: number | null;
    humidity?: number | null;
    description?: string | null;
  }): WeatherData {
    const name = obj.name === undefined ? null : obj.name;
    const temp = obj.temp === undefined ? null : obj.temp;
    const humidity = obj.humidity === undefined ? null : obj.humidity;
    const description = obj.description === undefined ? null : obj.description;

    return new WeatherData(name, temp, humidity, description);
  }

  isEmpty(): boolean {
    return (
      this.name === null ||
      this.temp === null ||
      this.humidity === null ||
      this.description === null
    );
  }

  toJSON(): {
    name: string | null;
    temp: number | null;
    humidity: number | null;
    description: string | null;
  } {
    return {
      name: this.name,
      temp: this.temp,
      humidity: this.humidity,
      description: this.description,
    };
  }
}
