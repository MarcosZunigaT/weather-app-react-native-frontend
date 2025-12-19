export class WeatherData {
  name: string;
  temp: number;
  humidity: number;
  description: string;

  constructor(
    name: string,
    temp: number,
    humidity: number,
    description: string
  ) {
    this.name = name;
    this.temp = temp;
    this.humidity = humidity;
    this.description = description;
  }

  static fromJSON(obj: {
    name: string;
    temp: number;
    humidity: number;
    description: string;
  }): WeatherData {
    return new WeatherData(obj.name, obj.temp, obj.humidity, obj.description);
  }

  toJSON(): {
    name: string;
    temp: number;
    humidity: number;
    description: string;
  } {
    return {
      name: this.name,
      temp: this.temp,
      humidity: this.humidity,
      description: this.description,
    };
  }
}
