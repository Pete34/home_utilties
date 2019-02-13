import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  QUOTES_HOST = environment.quote_host;

  getQuote$(): Observable<Quote> {
    const quote$ = this.http.get<Quote>(`${this.QUOTES_HOST}/api/RNGQuote`);
    return quote$;
  }
}
