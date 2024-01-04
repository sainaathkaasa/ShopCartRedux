import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import wishListReducer from "./wishListSlice"
import SearchReducer from './SearchSlice'
const rootReducer = combineReducers({
  cartItem: cartReducer,
  products: productReducer,
  wishLists:wishListReducer,
  search:SearchReducer
 
});
 
export default rootReducer;