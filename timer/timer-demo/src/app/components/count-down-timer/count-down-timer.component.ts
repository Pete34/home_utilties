import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Time } from 'src/app/helper';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
})
export class CountDownTimerComponent implements OnInit {
  constructor() {}
  @Input()
  isActive: boolean;
  @Input()
  timeLeft: Time;
  @Input()
  timerForm: FormGroup;
  @Output()
  triggerCountDown: EventEmitter<boolean> = new EventEmitter();
  @Output()
  triggerClear: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  startCountDown() {
    this.triggerCountDown.emit(true);
  }

  clear() {
    this.triggerClear.emit(true);
  }
}
