import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import filter from "./filter_reducer";
import pizzas from "./pizzas_reducer";
import cart from "./cart_reducer";

let reducers = combineReducers({
   pizzas,
   filter,
   cart
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store

export default store;