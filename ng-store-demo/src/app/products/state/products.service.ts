import { Injectable } from '@angular/core';
// import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { HttpClient } from '@angular/common/http';
import { ID } from '@datorama/akita';

import { ProductsStore } from './products.store';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService  {
  readonly _URL_PRODUCTS = environment.URL_PRODUCTS;


  constructor(private productsStore: ProductsStore,
              private http: HttpClient) {}

  get() {
    return this.http.get<Product[]>(this._URL_PRODUCTS)
      .pipe(
        tap(entities => this.productsStore.set(entities))
      );
  }

  add(product: Product) {
    this.productsStore.add(product);
  }

  update(id, product: Partial<Product>) {
    this.productsStore.update(id, product);
  }

  remove(id: number) {
    this.productsStore.remove(id);
  }

}
