import { Observable, timer, Subscription, interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { secondsToTime, Time } from './helper';
import { QuoteService } from './providers/quote.service';
import { Quote } from '@angular/compiler';
import { WeatherService } from './providers/weather.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
/**
 * This component is a demo project that creates some simple timers.
 * 1. Display Date and Time (updated every second)
 * 2. Provides a simple timer that just tracks how long since you hit start button.
 * 3. Provides a simple countdown timer that plays some bells when finished.
 * @export
 * @class AppComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  // variables for view..

  quote$: Observable<Quote>;
  inProgress = false;
  error = false;
  errorMessage = 'failed to get quote from DB!';
  dateTimer$: Observable<number>;
  date = new Date();
  dateSub: Subscription;
  /**
   * sets up two observables based on timer rxjs.
   * subscribes to one with method..
   */
  constructor(private quoteService: QuoteService) {
    this.dateTimer$ = timer(1000, 1000);
    this.updateDate();
  }

  ngOnInit(): void {
    this.getQuote();
  }

  private getQuote() {
    this.inProgress = true;
    this.quote$ = this.quoteService
      .getQuote$()
      .pipe(tap((quote) => this.handleProgress(quote), (error) => this.handleError(error)));
  }

  private handleProgress(quote: Quote) {
    console.log(quote);
    this.inProgress = false;
    this.error = false;
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    this.error = true;
    this.inProgress = false;
  }

  // we update date so time does not fall out of sync.
  updateDate() {
    this.dateSub = this.dateTimer$.subscribe((result) => {
      this.date = new Date();
    });
  }

  newQuote() {
    this.getQuote();
  }

  // we want to unsubscribe to prevent memory leak.
  ngOnDestroy(): void {}
}
