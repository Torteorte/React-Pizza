const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";

let initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0
}



let cartReducer = (state = initialState, action) => {
   switch (action.type) {

      case ADD_PIZZA_TO_CART:

         const currentPizzaItem =
            !state.items[action.payload.id]
               ? [action.payload]
               : [...state.items[action.payload.id].items, action.payload]

         const newItem = {
            ...state.items,
            [action.payload.id]: {
               items: currentPizzaItem,
               totalPrice: currentPizzaItem.reduce((sum, obj) => obj.price + sum, 0)
            }
         };

         const items = Object.values(newItem).map((obj) => obj.items)
         const allPizzas = [].concat.apply([], items)
         const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

         return {
            ...state,
            items: newItem,
            totalPrice: allPizzas.length,
            totalCount: totalPrice
         }

      case SET_TOTAL_PRICE:
         return { ...state, totalPrice: action.payload }

      case SET_TOTAL_COUNT:
         return { ...state, totalCount: action.payload }

      default:
         return state
   }
}

export const addPizzaToCartAC = (pizza) => ({ type: ADD_PIZZA_TO_CART, payload: pizza })
export const setTotalPriceAC = (total) => ({ type: SET_TOTAL_PRICE, payload: total })
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, payload: count })

export default cartReducer

// case ADD_PIZZA_TO_CART:

//    const currentPizzaItems = !state.items[action.payload.id]
//       ? [action.payload]
//       : [...state.items[action.payload.id].items, action.payload];

//    const newItems = {
//       ...state.items,
//       [action.payload.id]: {
//          items: currentPizzaItems,
//       },
//    };

//    return {
//       ...state,
//       items: newItems,
//    };