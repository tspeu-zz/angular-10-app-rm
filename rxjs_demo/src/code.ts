// import * as Rx from 'rxjs';
import {Observable } from 'rxjs';
import { share}  from 'rxjs/operators';

// values events emits over time
// observable provide the stream of data
console.log('observable');

// cold Observable. 
//el producer es el subscribe active once the subscribe is created.
const  obs$ = Observable.create( (observer:any) => {
   try{
      
      observer.next('Hello world');
      observer.next('Hello world2');
      setInterval( () =>{
         observer.next('TODO OK')
      }, 2000)
      // observer.complete();
      // observer.next('Hello world3');
   } 
   catch(err){
      observer.error(err)
   }

}).share();

const addItem = (val:any) => {
   const node = document?.createElement("li");
   const text = document?.createTextNode(val);
   node?.appendChild(text);
   document.getElementById("output")?.appendChild(node);
};

let subs = obs$.subscribe( 
   (x:any)=> addItem(x),
   (error: any ) => addItem(error),
   () => addItem('Completed')

);

// let subs2 = obs$.subscribe( 
//    (x:any)=> addItem('--'+x),
//    (error: any ) => addItem(error),
//    () => addItem('Completed')
// );

// añade al observabale otro y se pueden unsubscribe los dos.
// subs.add(subs2);

setTimeout( () => {
   // subs.unsubscribe();
   console.log('todo listo'); 
   const subsCold= obs$.subscribe(
      (x:any) => addItem('subsciber COLD ' + x)
   ) 
}, 1000);




//hot Observable
// el priduces emite values outside 