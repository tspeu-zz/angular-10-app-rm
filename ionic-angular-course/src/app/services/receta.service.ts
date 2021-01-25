import { Injectable } from '@angular/core';
import { Receta } from '../recetas/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private recetas: Receta[] =[
    {
      id: 'r1',
      title: 'Burritos',
      imageUrl: 'assets/img/burrito.jpeg',
      ingredients: ['Tortitas','Carne', 'Lechuga','Jitomates', 'Chile']
    },
    {
      id: 'r2',
      title: 'Pasta con salsa',
      imageUrl: 'assets/img/pasta.jpeg',
      ingredients: ['Macarrones','Salsa','Tomates', 'Albahaca']
    },
  ];

  constructor() { }

  getAllRecetas() {
    return [...this.recetas];
  }

  getReceta(recetaId: string) {
    return {...this.recetas.find( r => {
      return r.id === recetaId
    })};
  }

  deleteReceta(recetaID: string){
    this.recetas = this.recetas.filter( r => {
      return r.id !== recetaID;
    });
    
  }
}
