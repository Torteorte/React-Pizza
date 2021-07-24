import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import filterReducer from "./filter_reducer";
import pizzasReducer from "./pizzas_reducer";

let reducers = combineReducers({
   pizzas: pizzasReducer,
   filter: filterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store

export default store;