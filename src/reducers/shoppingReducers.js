import { types } from "../actions/shoppingActions";
import productList from '../productList'

export const shoppingInitialState = {
  productList,
  cart: []
}

export const shoppingReducers = (state = shoppingInitialState, actions) => {

  switch (actions.type) {
    case types.add_to_cart: {
      return {
        ...state,
        cart: [...state.cart, actions.payload]
      }
    }
    case types.remove_one_from_cart: {
      return shoppingInitialState;
    }
    case types.remove_old_from_cart: {
      return shoppingInitialState;
    }
    case types.clear_cart: {

      return shoppingInitialState;
    }
    default:
      return shoppingInitialState;
  }

}