import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { Observable, Subscription, timer, interval } from 'rxjs';
import { Quote } from '@angular/compiler';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuoteService } from 'src/app/providers/quote.service';
import { WeatherService } from 'src/app/providers/weather.service';
import { secondsToTime, Time } from 'src/app/helper';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss'],
})
export class TimersComponent implements OnInit, OnDestroy {
  date = new Date();
  timerValue = 0;
  timeLeft: Time;
  timeCounted: Time;
  isActive = false;
  // for audio player
  @ViewChild('audioOption', { static: true })
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

  /**
   * sets up two observables based on timer rxjs.
   * subscribes to one with method..
   */
  constructor(private fb: FormBuilder) {
    this.currentTime$ = timer(0, 1000);
    this.dateTimer$ = timer(1000, 1000);
    this.updateDate();
    this.createForm();
  }

  ngOnInit() {}

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
