import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Time } from 'src/app/helper';

@Component({
  selector: 'app-basic-timer',
  templateUrl: './basic-timer.component.html',
  styleUrls: ['./basic-timer.component.scss'],
})
export class BasicTimerComponent implements OnInit {
  constructor() {}

  @Input()
  timeCounted: Time;
  @Output()
  triggerTimer: EventEmitter<boolean> = new EventEmitter();
  @Output()
  triggerTimerStop: EventEmitter<boolean> = new EventEmitter();
  @Output()
  triggerTimerReset: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  startTimer() {
    this.triggerTimer.emit(true);
  }

  stopTimer() {
    this.triggerTimerStop.emit(true);
  }

  resetTimer() {
    this.triggerTimerReset.emit(true);
  }
}
