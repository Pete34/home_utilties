import {
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Observable, timer, Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { secondsToTime, Time } from './helper';
import { QuoteService } from './providers/quote.service';
import { Quote } from '@angular/compiler';
import { WeatherService } from './providers/weather.service';
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
  date = new Date();
  timerValue = 0;
  timeLeft: Time;
  timeCounted: Time;
  isActive = false;
  // for audio player
  @ViewChild('audioOption')
  audioPlayerRef: ElementRef;
  quote$: Observable<Quote>;
  hideWeather = false;

  // rxjs variables for timer rxjs
  timerSub: Subscription;
  dateSub: Subscription;
  countDownSub: Subscription;
  currentTime$: Observable<number>;
  dateTimer$: Observable<number>;
  countDownTimer$: Observable<number>;

  // form variables
  timerForm: FormGroup;

  // weather variables.
  weather$;

  /**
   * sets up two observables based on timer rxjs.
   * subscribes to one with method..
   */
  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService,
    private weatherService: WeatherService,
  ) {
    this.currentTime$ = timer(0, 1000);
    this.dateTimer$ = timer(1000, 1000);
    this.updateDate();
    this.createForm();
  }

  ngOnInit(): void {
    this.quote$ = this.quoteService.getQuote$();
  }

  newQuote() {
    this.quote$ = this.quoteService.getQuote$();
  }
  /**
   * starts a subcription to act as a timer.
   */
  startTimer() {
    this.timerSub = this.currentTime$.subscribe((timerObs) => {
      this.timerValue++;
      this.timeCounted = secondsToTime(this.timerValue);
    });
  }

  /**
   * To stop timer we unsubscribe
   */
  stopTimer() {
    this.timerSub.unsubscribe();
  }

  /**
   * resets timer to zero - if user wants to reset it.
   * also unsubscribes.
   */
  resetTimer() {
    this.timerSub.unsubscribe();
    this.timerValue = 0;
    this.timeCounted.hours = 0;
    this.timeCounted.minutes = 0;
    this.timeCounted.seconds = 0;
  }

  // we update date so time does not fall out of sync.
  updateDate() {
    this.dateSub = this.dateTimer$.subscribe((result) => {
      this.date = new Date();
    });
  }

  /**
   * Creates form for the CountDown Timer.
   */
  createForm() {
    // form created here.
    this.timerForm = this.fb.group({
      hours: [0],
      minutes: [0],
      seconds: [0],
    });
  }

  /**
   * starts the count down after user enters numbers.
   * 1. Sets background color back to normal.
   * 2. Gets seconds value from user input.
   * 3. Creates obervable interval from seconds value.
   * 4. Subscribes to that observable.
   */
  startCountDown() {
    // set class back to false - so color of timer returns to gray.
    this.isActive = false;
    // gets total seconds.
    const totalSeconds = this.getTotalSeconds(this.timerForm.value);
    // since interval takes 1 second to start - we add one second.
    const countDownLength = totalSeconds + 1;
    // set observable
    this.countDownTimer$ = interval(1000).pipe(take(countDownLength));
    // subscribe to observable.
    this.subscribeToCountDown(totalSeconds);
  }

  /**
   * subscribes to countdown observable created by user.
   * plays song after observable finished and changes color.
   * @param totalSeconds
   */
  private subscribeToCountDown(totalSeconds: number) {
    this.countDownSub = this.countDownTimer$.subscribe((result) => {
      this.timeLeft = secondsToTime(totalSeconds);
      totalSeconds--;
      const remaining =
        this.timeLeft.hours + this.timeLeft.minutes + this.timeLeft.seconds;
      if (remaining === 0) {
        this.playSound();
      }
    });
  }

  // gets total number of seconds from form.
  private getTotalSeconds(timeEntered: Time) {
    const { hours, minutes, seconds } = timeEntered;
    return hours * 3600 + minutes * 60 + seconds;
  }

  /**
   * Plays song after countdown.
   * Changes color of timer.
   */
  private playSound() {
    this.audioPlayerRef.nativeElement.loop = true;
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
    this.isActive = true;
  }

  /**
   * this will cancel out the countdown timer.
   * 1. unsubs in case observable is still going.
   * 2. stops music.
   * 3. resets time left.
   * 4. changes color of timer to normal.
   */
  clear() {
    this.countDownSub.unsubscribe();
    this.audioPlayerRef.nativeElement.pause();
    this.timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    this.isActive = false;
  }

  getGeoInfo() {
    const location = navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = pos['coords'];
        const { longitude, latitude } = coords;
        this.weather$ = this.weatherService.getWeather$(longitude, latitude);
      },
      (error) => console.log(error),
    );
  }

  // we want to unsubscribe to prevent memory leak.
  ngOnDestroy(): void {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
    if (this.dateSub) {
      this.dateSub.unsubscribe();
    }
    if (this.countDownSub) {
      this.countDownSub.unsubscribe();
    }
  }
}
