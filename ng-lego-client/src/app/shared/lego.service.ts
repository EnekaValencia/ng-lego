import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Lego } from './lego';

@Injectable({
  providedIn: 'root'
})
export class LegoService {
  private legosUrl = 'http://localhost:8000/legos';

  constructor(private http: HttpClient) { }

  getLegos(): Observable<Lego[]> {
    return this.http.get<Lego[]>(this.legosUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxLegoId(): Observable<Lego> {
    return this.http.get<Lego[]>(this.legosUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getLegoById(id: number): Observable<Lego> {
    const url = `${this.legosUrl}/${id}`;
    return this.http.get<Lego>(url)
      .pipe(
        tap(data => console.log('getLego: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createLego(lego: Lego): Observable<Lego> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    lego.id = null;
    return this.http.post<Lego>(this.legosUrl, lego, { headers: headers })
      .pipe(
        tap(data => console.log('createLego: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteLego(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.legosUrl}/${id}`;
    return this.http.delete<Lego>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteLego: ' + id)),
        catchError(this.handleError)
      );
  }

  updateLego(lego: Lego): Observable<Lego> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.legosUrl}/${lego.id}`;
    return this.http.put<Lego>(url, lego, { headers: headers })
      .pipe(
        tap(() => console.log('updateLego: ' + lego.id)),
        map(() => lego),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
