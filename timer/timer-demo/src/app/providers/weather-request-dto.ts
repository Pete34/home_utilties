export class WeatherRequestDTO {
  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }
  longitude: number;
  latitude: number;
}
