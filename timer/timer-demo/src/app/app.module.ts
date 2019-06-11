import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherPictureComponent } from './components/weather-picture/weather-picture.component';
import { CurrentDataComponent } from './components/current-data/current-data.component';
import { BasicTimerComponent } from './components/basic-timer/basic-timer.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { FutureDaysDataComponent } from './components/future-days-data/future-days-data.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    WeatherPictureComponent,
    CurrentDataComponent,
    BasicTimerComponent,
    CountDownTimerComponent,
    FutureDaysDataComponent,
    BasicButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
