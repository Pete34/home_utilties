import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  @Input()
  weather: any;
  hours;
  days;
  constructor() {}


  checkIcon(icon: string) {
    console.log(icon);
    return 'assets/icons/animated/day.svg';

  }
  ngOnInit() {}
}
