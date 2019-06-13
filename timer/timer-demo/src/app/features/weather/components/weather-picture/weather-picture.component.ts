import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-picture',
  templateUrl: './weather-picture.component.html',
  styleUrls: ['./weather-picture.component.scss'],
})
export class WeatherPictureComponent implements OnInit {
  constructor() {}

  imagePath = 'assets/icons/weather/day.svg';

  @Input()
  set iconImage(icon: string) {
    console.log(icon);
    switch (icon) {
      case 'clear-day':
      this.imagePath = 'assets/icons/weather/Sun.svg';
      return;
      case 'clear-night':
      this.imagePath = 'assets/icons/weather/Moon.svg';
      return;
      case 'rain':
      this.imagePath = 'assets/icons/weather/Cloud-Rain-Alt.svg';
      return;
      case 'snow':
      this.imagePath = 'assets/icons/weather/Cloud-snow.svg';
      return;
      case 'sleet':
      this.imagePath = 'assets/icons/weather/Cloud-Rain-Alt.svg';
      return;
      case 'wind':
      this.imagePath = 'assets/icons/weather/Wind.svg';
      return;
      case 'fog':
      this.imagePath = 'assets/icons/weather/Cloud-Fog.svg';
      return;
      case 'cloudy':
      this.imagePath = 'assets/icons/weather/Cloud.svg';
      return;
      case 'partly-cloudy-day':
      this.imagePath = 'assets/icons/weather/Cloud-Sun.svg';
      return;
      case 'partly-cloudy-night':
      this.imagePath = 'assets/icons/weather/Cloud-Moon.svg';
      return;

      default:
        this.imagePath = 'assets/icons/weather/Cloud.svg';
    }
  }

  ngOnInit() {}
}
