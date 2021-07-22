import { combineReducers, createStore } from "redux";
import filterReducer from "./filter_reducer";
import pizzasReducer from "./pizzas_reducer";

let reducers = combineReducers({
   pizzas: pizzasReducer,
   filter: filterReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store

export default store;