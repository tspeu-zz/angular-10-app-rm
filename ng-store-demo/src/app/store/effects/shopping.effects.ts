import { Injectable } from "@angular/core";
import {Effect , Actions, ofType} from '@ngrx/effects';
import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
//
import { ShoppingService } from "src/app/services/shopping.service";
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, LoadShoppingAction, LoadShoppingFailureAction, LoadShoppingSuccessAction, ShoppingActionTypes } from "../acttions/shopping.actions";

@Injectable()
export class ShoppingEffects {


constructor(private actions$: Actions,
            private shoppService: ShoppingService){}
//npm i @ngrx/effects
//ng add @ngrx/effects
@Effect() loadShopping$ = this.actions$
          .pipe(
            ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
            mergeMap(
              () => this.shoppService.getShoppinItems()
              .pipe(
                map( data => new LoadShoppingSuccessAction(data)),
                catchError(error => of( new LoadShoppingFailureAction(error)))
              )
            )
          );

  //
  @Effect() addShoppingItem$ = this.actions$
          .pipe(
            ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
            mergeMap(
              (data) => this.shoppService.addShoppinItems(data.payload)
                .pipe(
                  map(() => new AddItemSuccessAction(data.payload)),
                  catchError(error => of(new AddItemFailureAction(error)))
                )
            )
          );
  //
  @Effect() deleteShoppingItem$ = this.actions$
            .pipe(
              ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
              mergeMap(
                (data) => this.shoppService.deleteShoppinItems(data.payload)
                  .pipe(
                    map(() => new DeleteItemSuccessAction(data.payload)),
                    catchError(error => of(new DeleteItemFailureAction(error)))
                  )
              )
            );


}
