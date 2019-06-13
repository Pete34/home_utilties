import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/providers/weather.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  inProgress = false;
  weather$;
  hideWeather = false;

  constructor(private weatherService: WeatherService) {}

  getGeoInfo() {
    const location = navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.inProgress = true;
        const coords = pos['coords'];
        const { longitude, latitude } = coords;
        this.weather$ = this.weatherService
          .getWeather$(longitude, latitude)
          .pipe(
            tap(
              (result) => this.weatherCheck(result),
              (error) => this.weatherFail(error),
            ),
          );
      },
      (error) => console.log(error),
    );
  }

  private weatherCheck(result: any) {
    console.log(result);
    this.inProgress = false;
  }
  private weatherFail(error: any) {
    console.log(error);
    this.inProgress = false;
  }

  ngOnInit() {
    this.getGeoInfo();
  }
}
