import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './containers/weather/weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { CurrentDataComponent } from './components/current-data/current-data.component';
import { FutureDaysDataComponent } from './components/future-days-data/future-days-data.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherPictureComponent } from './components/weather-picture/weather-picture.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    WeatherComponent,
    CurrentDataComponent,
    FutureDaysDataComponent,
    WeatherInfoComponent,
    WeatherPictureComponent,

  ],
  imports: [CommonModule, WeatherRoutingModule, MatButtonModule],
})
export class WeatherModule {}
