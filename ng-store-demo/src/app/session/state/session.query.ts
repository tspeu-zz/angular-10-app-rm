import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';
// import  *  as environment  from "./environment";

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {

  selectUserName$ = this.select('name');
  selectIsLogin$ = this.select('token');


  constructor(protected store: SessionStore) {
    super(store);
  }

}
