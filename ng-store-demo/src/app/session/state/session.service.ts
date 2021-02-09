import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SessionStore } from './session.store';
//
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SessionService {

  readonly _URL = environment.URL_SESSION;

  constructor(private sessionStore: SessionStore,
              private http: HttpClient) {
  }

  Login(credentials){
    return this.http.get(this._URL)
    .pipe(
      tap(user => this.sessionStore.update(user))
    );
  }


}
