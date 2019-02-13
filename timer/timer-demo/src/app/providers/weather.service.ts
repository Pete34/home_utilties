import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { WeatherRequestDTO } from './weather-request-dto';
import { Observable } from 'rxjs';
/**
 * Users Dark Skies via proxy for security.
 *
 * @export
 * @class WeatherService
 */
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  WEATHER_HOST = environment.weather_host;

  constructor(private http: HttpClient) {}

  getWeather$(longitude: number, latitude: number): Observable<any> {
    const weatherRequest = new WeatherRequestDTO(longitude, latitude);
    const weather$ = this.http.post(
      `${this.WEATHER_HOST}/api/weather`,
      weatherRequest,
    );
    return weather$;
  }
}
