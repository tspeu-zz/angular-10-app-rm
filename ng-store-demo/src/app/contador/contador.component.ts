import { Component, OnInit } from '@angular/core';

// los reducer están importados en el stroe
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
// actiones
import * as acciones from '../actions/contador.actions';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<{contador: number}>) {

  }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(select('contador'));
  }

  // crear las acciones del compponente

  incrementar(){
    this.store.dispatch(acciones.aumentar());
  }

  decrementar(){
    this.store.dispatch(acciones.disminuir());
  }

  aleatorio(){
    this.store.dispatch(acciones.aleatorio());
  }

  // lleva el nombre del props del accions
  saltar(num: number){
    this.store.dispatch(acciones.saltar({propNum: num}));
  }

}
