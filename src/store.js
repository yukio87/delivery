import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import menuReducer from "./features/menu/menuSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
