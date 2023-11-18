const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "cart/addItem":
      return { ...state, cart: [...state.cart, action.payload] };

    case "cart/deleteItem":
      return {
        ...state,
        cart: [...state.cart].filter((item) => item.drinkId !== action.payload),
      };

    case "cart/increaseItemQuantity": {
      const newState = { ...state };
      const item = newState.cart.find(
        (item) => item.drinkId === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;

      return { ...state, cart: [...newState.cart] };
    }

    case "cart/decreaseItemQuantity": {
      const newState = { ...state };
      const item = newState.cart.find(
        (item) => item.drinkId === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        return {
          ...state,
          cart: [...state.cart].filter(
            (item) => item.drinkId !== action.payload
          ),
        };

      return { ...state, cart: [...newState.cart] };
    }

    case "cart/clearCart":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

/////////////////////////////////////////////////////////////////////////

export function addItem(newItem) {
  return { type: "cart/addItem", payload: newItem };
}

export function deleteItem(id) {
  return { type: "cart/deleteItem", payload: id };
}

export function increaseItemQuantity(id) {
  return { type: "cart/increaseItemQuantity", payload: id };
}

export function decreaseItemQuantity(id) {
  return { type: "cart/decreaseItemQuantity", payload: id };
}

export function clearCart() {
  return { type: "cart/clearCart" };
}

/////////////////////////////////////////////////////////////////////////

export function getTotalCartQuantity(store) {
  return store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
}

export function getTotalCartPrice(store) {
  return store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
}

export function getCart(store) {
  return store.cart.cart;
}

export function getQuantityById(id) {
  return function (store) {
    return store.cart.cart.find((item) => item.drinkId === id)?.quantity || 0;
  };
}
