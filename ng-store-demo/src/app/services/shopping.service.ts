import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs/operators";
//
import { ShoppingItem } from '../store/models/shopingItem';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) { }
// json-server db.json
  getShoppinItems(){
    return this.http.get<ShoppingItem[]>(this._URL)
      .pipe(
        delay(500)
      );
  }

  addShoppinItems(items: ShoppingItem){
  return this.http.post(this._URL, items)
  .pipe(
    delay(500)
  );

  }

  deleteShoppinItems(id: string){
    return this.http.delete(`${this._URL}/${id}`)
    .pipe(
      delay(500)
    )
  }
}
