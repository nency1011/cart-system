import { ADD_CART } from "../action/type";

let INITIAL_STATE = {
  add_cart: [],
};

function addToCart(state, action) {
  let { add_cart } = state;
  add_cart.push(action.pyaload);
  state = { ...state, add_cart };
  return state;
}

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART:
      return addToCart(state, action);
    default:
      return state;
  }
};

export default cart;
