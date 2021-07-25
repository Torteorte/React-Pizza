import axios from "axios";

const SET_PIZZAS = "SET_PIZZAS";

let initialState = {

   items: [],
   isLoaded: false
}

let pizzasReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_PIZZAS:
         return { ...state, items: action.payload, isLoaded: true };

      case 'SET_LOADED':
         return {
            ...state, isLoaded: action.payload,
         };

      default:
         return state
   }
}

export const setPizzasAC = (items) => ({ type: SET_PIZZAS, payload: items })

export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });

export const setPizzas = (category, sortBy) => async (dispatch) => {
   dispatch(setLoaded(false))
   let response = await axios.get(`/pizzas?${category !== null ? `category=${category}` : ``}&_sort=${sortBy.type}&_order=${sortBy.order}`)
   dispatch(setPizzasAC(response.data))
}

export default pizzasReducer