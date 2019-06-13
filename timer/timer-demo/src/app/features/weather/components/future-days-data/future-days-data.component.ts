import { Component, OnInit, Input } from '@angular/core';
import { FutureDay } from './future-day';

@Component({
  selector: 'app-future-days-data',
  templateUrl: './future-days-data.component.html',
  styleUrls: ['./future-days-data.component.scss'],
})
export class FutureDaysDataComponent implements OnInit {
  @Input()
  futureDay: FutureDay;
  constructor() {}

  ngOnInit() {}
}
