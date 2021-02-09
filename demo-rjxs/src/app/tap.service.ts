import { Injectable}  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce, map, shareReplay, tap } from 'rxjs/operators';
import { combineLatest, Observable, timer } from 'rxjs';
import { Posts } from './app.component';


@Injectable({ providedIn: 'root'})
export class TapService {



constructor( private http: HttpClient){}

  getPostes$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(debounce(() => timer(2000)),
            tap()
      );

  commnet$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
            .pipe(tap(console.warn));

  post$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
          .pipe( tap(console.warn));

  postsComents$ = combineLatest([this.post$, this.commnet$])
  .pipe(
      map(([posts, comm]) =>
      posts.map(
        p => ({...p,
          comment: comm.find(c =>
            p.id === c.id
            ).id
          } as Posts),
        console.log(comm)
          )
      ));


  sharePosts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
                .pipe(
                  tap(console.log),
                  shareReplay(1)
                )

}
