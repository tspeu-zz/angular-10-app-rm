import { createReducer, on } from '@ngrx/store';
import  * as states  from '../actions/contador.actions';

// estado inicial
export const initial = 0;

// funcion interna
const _counterReducer = createReducer(
  initial,
  on(states.aumentar, init => init + 1),
  on(states.disminuir, init => init - 1),
  on(states.aleatorio, init => Math.floor(Math.random() * 100)),
  on(states.saltar, (init, { propNum}) => propNum),
);

/*tiene dos valers
state es initial y
actions es cualquiera de las on que se han incluido */
export function counterReducer(state, action) {
  return _counterReducer(state,action);
}
