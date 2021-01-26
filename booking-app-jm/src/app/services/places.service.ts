import { Injectable } from '@angular/core';
import { IPlace } from '../models/Iplace.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: IPlace[] = [
    {
      id: 'p1',
      title: 'Manssion en Manhattan',
      description: 'Nueva Casa en Nuyol',
      imageUrl: 'assets/img/ny.jpeg',
      price: 149.52
    },
    {
      id: 'p2',
      title: 'Chaison Au Pari',
      description: 'París es la ciudad de esta',
      imageUrl: 'assets/img/paris.jpeg',
      price: 449.78
    },
    {
      id: 'p3',
      title: 'Casa rural',
      description: 'El bosque está solo',
      imageUrl: 'assets/img/rural.jpeg',
      price: 50.95
    }
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }
}
