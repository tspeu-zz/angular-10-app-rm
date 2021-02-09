import { AfterContentInit, AfterViewInit, Component, ContentChild,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { from, fromEvent, interval, Observable, of, pipe, Subject } from 'rxjs';
import { map, tap , share, switchMap, debounceTime, debounce, distinctUntilChanged, take, takeWhile, takeLast, takeUntil, filter, mapTo, delay, concatMap, mergeMap} from 'rxjs/operators';
import { timer, combineLatest } from 'rxjs';
import { TapService } from './../../../tap.service';

export interface Person{
  name: string;
  age?: number;
}


export interface Posts{
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit, AfterViewInit,
OnChanges, AfterContentInit{
  title = 'demo-rjxs';

  @ViewChild('liber') liberto: ElementRef;
  @ContentChild('contentPost') postContent: ElementRef;

  persona: Person = {
    name: 'pepe',
    age: 99
  };

  data = [
    {
      type: 'nada',
      name: 'Nombre de nada',
      content: 'Nada Contenido',
      done: true
    },
    {
      type: 'server',
      name: 'Nombre Servertest',
      content: 'El servidor',
      done: true
    },
    {
      type: '',
      name: 'No tinene Nombre Servertest',
      content: 'No tiene El servidor',
      done: true
    }
  ];

  post = {name: "Este post", content: "Este contenido!!!"};

  postData : {name: string, content: string};

  private loading = false;

  /**
   *
   */
  constructor(private http: HttpClient,
              private serv: TapService) {}

  ngAfterContentInit(): void {
    console.log('ng Content',this.postContent);
  }


  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    console.log('this.liberto');
    console.log(this.liberto);
    const data = this.liberto;
    console.log(data);
  }

onShowPost(post:{name: string, content: string}){
  console.log(post);
  this.postData = post;
  this.data.push({
    name: post.name,
    type: 'server',
    content: post.content,
    done: true
  })
}


  /** crear observebel de un objeto of
   * From de una promise */
//crear promise
  personPromise: Promise<Person> = Promise.resolve(this.persona);
  //crear observabe de promesa
  promise$: Observable<Person> = from(this.personPromise);
  //crear observabe
  person$:  Observable<Person> = of(this.persona);

  /**
   * Map/tap
   */
  source = of('El nombre');

  onStop = new Subject<void>();

  nums = of(1,2,3,4,5,6,7,8,9,10);

//map manipulate de data

//tap dont manipulate the original data.
// send data to a service without changing
  postes: any[] ;

  _postA$ = this.serv.getPostes$.pipe(
    // timer(1000),
    // debounce(() => timer(2000)),
    // delay(2000),
    take(1)
  );



  dataPostes$;

  ngOnInit(){
    console.log('Init');

    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe(val =>
      console.log(`With concatMap: ${val}`)
    );

    // showing the difference between concatMap and mergeMap
    const mergeMapExample = source
      .pipe(
        // just so we can log this after the first example has run
        delay(5000),
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      )
      .subscribe(val => console.log(`With mergeMap: ${val}`));




  // // const hombre = this.person$.subscribe((x) => JSON.stringify(x));
  // this.person$.subscribe(x => console.log(x));
  // this.promise$.subscribe(x => console.log(x));
  // // console.log(hombre)
  // let aa;
  // let bb;
  // this.source.pipe(
  //   map(x => {
  //     bb= x.toUpperCase();
  //   }),
  // ).subscribe(data => this.addItem(data));


  // this.source.pipe(
  //   tap(y => {
  //     aa =  y.toUpperCase();
  //   })
  // ).subscribe(data => this.addItem(data));



  // // share no matter how many subbstibe give you one original source
  // const req$ = this.getPosts();

  // this.setLoadingSpinner(req$);

  // // req$.subscribe(value => console.log(value));

  // /**  SwitchMap-> */
  // // cancel from one obs anw canbia a otro
  // const postObs$ = this.getPosts();
  // const commObs$ = this.getComents();
  // //subs ti post an then cancel those and change to comments
  // const combine = postObs$.pipe(
  //   debounceTime(15000),
  //   switchMap(post => {
  //     return commObs$
  //     .pipe(
  //       tap(comm => {
  //         // console.log('comment: ',comm);
  //         // console.log('posts: ', post);
  //       })
  //     )
  //   })
  //   );

  //   // combine.subscribe();

  //   const debunce = this.debounceBusca(this.source)
  //                   .pipe(
  //                     distinctUntilChanged(),
  //                     debounceTime(15000)
  //                   );
  //   debunce.subscribe(x => console.log(x));
  //   let counter = 0;
  //   const clicked = fromEvent(document, 'click');
  //   clicked
  //   // .pipe(take(1))
  //   // .pipe(takeWhile( () => counter < 3))
  //     .pipe(takeUntil(this.onStop))
  //     .subscribe( () => {
  //       console.log('clicked on doc!', counter);
  //       counter++;
  //   });

  //   const datas = of(1,2,3,4,5);
  //   datas.pipe(takeLast(2))
  //     .subscribe( val => {
  //       console.log('value', val);
  //     });

  //   //TAP:=>
  //   const posTAP = clicked.pipe(
  //     tap( ev => console.log('EL CLIEKCE DE TAP '+ ev),
  //     err => console.log(err),
  //     () => console.log('complete - TAP')
  //     ));

  //     posTAP.subscribe(p => console.log(p));


  //     //
  //     let filtra =  this.filterNums(this.nums);

  //     filtra.pipe( map(x => x *1 ))
  //       .subscribe(z => console.log(z));



  //     // let ids = this.filterNums();
  //   const sub01 =  this.obTimer.subscribe(x => console.log(x));
  //   const sub02 =  this.obTimer.subscribe(x => console.log(x));
  //   const sharedObs = this.obTimer.pipe( share());

  //   console.log('shared-->');
  //   const sub03 = sharedObs.subscribe(x => console.log(x));
  //   const sub04 = sharedObs.subscribe(x => console.log(x));

  //   //
  //   // this.postes = [];
  //   this.postes$.pipe(map(x =>{
  //     // console.log(x);
  //     this.postes = [...x];
  //   })).subscribe();

  //   // console.log(this.postes );
  //   // this.postes$.pipe(map(x => console.log(x))).subscribe();

}
//
  stop() {
    console.log('stop');
    this.onStop.next();
    this.onStop.complete();
  }

// tap->

  postes$ = this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(console.log, err => console.log(err))
    );


// share
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
          .pipe(share());

  }

  //
  getComents(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
            .pipe(share());
  }

  // filter
  filterNums = pipe(
      filter((n:number) => n % 2 !== 0),
      // map(x => x )
    );


  filtrarPares(n: number) {
    return n => n % 2 === 0;
  }

  //


  //
  setLoadingSpinner(observable: Observable<any>){
    this.loading = true;
    observable.subscribe(() => this.loading = false);
  }



  /**Debounce time
   * fix make request server with any interaction of an input
   *
  */
  debounceBusca(text$: Observable<string>){
    return text$.pipe(
      debounce(() => timer(5000)),
      map(x => console.log(x.toUpperCase()))
    );
  }

  addItem = (val:any) => {
    const node = document?.createElement("li");
    const text = document?.createTextNode(val);
    node?.appendChild(text);
    document.getElementById("output")?.appendChild(node);
  };

  /** distinctUntilChanged */

  /**(take) takeUntil takeWhile takeLast */

  /**mergeMap FlapMap */

  // TAP->

  //share
  timer1 = timer(2000);

  obTimer = this.timer1.pipe(
    tap(() => console.log('TAP ON'), err => console.log(err)),
    mapTo('-->FINAL-->')
  );

  // tap solo
}
