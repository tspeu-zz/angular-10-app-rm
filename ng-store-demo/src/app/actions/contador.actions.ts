// estados son las acciones. acciones son los estados.

//contador sumar un numero o restar un numero.
//o reset a cero o generear un numero nuevo.
// son las Actions son la definicion de los estados
import { createAction, props } from '@ngrx/store';

export const aumentar =  createAction('Incremento');
export const disminuir =  createAction('Decremento');
export const aleatorio =  createAction('Ramdon');
export const saltar =  createAction('Saltar',
  props<{propNum: number}>()
);

