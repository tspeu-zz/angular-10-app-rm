//unic eventes que van a pasar en la app
// cada vex que se va a comunicar con la app
import { Action } from '@ngrx/store';
import { ShoppingItem} from '../models/shopingItem';

// es la representacion de las acciones, deben ser unicas
// se [indica] de qué estado pertenece la accion
export enum ShoppingActionTypes{
  ADD_ITEM = '[SHOPPING] add item',
  ADD_ITEM_SUCCESS = '[SHOPPING] add item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] add item failure ERROR',
  DELETE_ITEM = '[SHOPPING] delete item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] DELETE item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] add item failure ERROR',
  LOAD_SHOPPING = '[SHOPPING] load shopping items',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] load shopping items SUCCESS',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] load shopping items FAILURE'
}


//se implementa acions que necesita un type string. y unos datos opcionales.
export class AddItemAction implements Action{
  readonly type: string = ShoppingActionTypes.ADD_ITEM;
  //option payload
  constructor(public payload: ShoppingItem) {}
}
export class AddItemSuccessAction implements Action{
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) {}
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
  constructor(public payload: Error){}
}
//-----------------------DELETE
export class DeleteItemAction implements Action{
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  /** just the id of the shoppingItem*/
  constructor(public payload: string) {}
}
export class DeleteItemSuccessAction implements Action{
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
  /*** just the id of the shoppingItem*/
  constructor(public payload: string) {}
}
export class DeleteItemFailureAction implements Action{
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
  /*** just the id of the shoppingItem*/
  constructor(public payload: string) {}
}
//------------------------------------- LOAD data
export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
  // constructor(public payload: ShoppingItem){}
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: Array<ShoppingItem>){}
}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
  constructor(public payload: Error){}
}

export type ShoppingAction =
| AddItemAction
|AddItemSuccessAction
| AddItemFailureAction
| DeleteItemAction
| DeleteItemSuccessAction
| DeleteItemFailureAction
| LoadShoppingAction
| LoadShoppingSuccessAction
| LoadShoppingFailureAction;

// en este punto se describe la accion de addItem en una accion.
//cuando se añade un Item debe ser de tipo ShopingItem
