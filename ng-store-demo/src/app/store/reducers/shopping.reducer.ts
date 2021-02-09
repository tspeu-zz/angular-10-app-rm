import { ShoppingItem  } from '../models/shopingItem';
import { ShoppingAction, ShoppingActionTypes } from '../acttions/shopping.actions';
import { ShoppingState } from '../models/shopping.state.models';


// initial state
// const intitiaState:  Array<ShoppingItem> = [
const intitiaState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
}

// exort una funcion.-
// tiene el current state yt la action
//el reducer dice cual es el estado inicial y cual es la accion que se dispara
// cuando se invoque y se cambie ese estado
export function ShoppingReducer(state: ShoppingState = intitiaState,
                                action: ShoppingAction) {
  switch(action.type){
    case ShoppingActionTypes.ADD_ITEM:
      console.log(action);
      return {...state, loading: true }
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      console.log(action);
      // si la accion es esta , se devuele un nueva version del estado con
      // el stado initial y el nuevo item añadido que es el payload dentro de la accion
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      console.log(action);
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.LOAD_SHOPPING:
      console.log(action);
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      console.log(action);
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      console.log(action);
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    // si no hay una accion devuelve el estado
    default:
      console.log(action);
      return state;
  }

}
