import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimersComponent } from './container/timers/timers.component';
import { BasicTimerComponent } from './components/basic-timer/basic-timer.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimersRoutingModule } from './timers-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TimersComponent, BasicTimerComponent, CountDownTimerComponent, BasicButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, TimersRoutingModule, MatButtonModule],
})
export class TimerModule {}
