import { ShoppingItem } from "./shopingItem";

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}
