import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { v4 as uuid } from 'uuid';
//
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './store/acttions/shopping.actions';
import { AppState } from './store/models/app.state.model';
import { ShoppingItem } from './store/models/shopingItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-store-demo';

  shoppinItems$:  Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  newShoppingItem: ShoppingItem = {
    id: '',
    name: ''
  }

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.shoppinItems$ = this.store.select( store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    //add el item luego de 3 seg
    // setTimeout(() => this.addItem() , 3000 );
    this.store.dispatch(new LoadShoppingAction());
  }

  // dispara una accion en el store
  addItem(){

    if(this.newShoppingItem.name !== '') {
      console.log('aad item por action');
      this.newShoppingItem.id = uuid();
      console.log('aad item por action', this.newShoppingItem);

      this.store.dispatch(new AddItemAction(this.newShoppingItem));

      // clear
      this.newShoppingItem = {id:'', name:''}
    }
    return false;
  }

  deleteItem(item : string) {
    console.log('DELETE ITEM ID: ', item);
    this.store.dispatch(new DeleteItemAction(item));
  }


    // this.store.dispatch(new AddItemAction({
    //   id: 'i222',
    //   name: 'Dr. Pepper con agua'
    // }));
}
