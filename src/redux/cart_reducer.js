const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const ADD_PIZZA_TO_CART = "ADD_PIZZA_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_PIZZA_ITEM = "REMOVE_PIZZA_ITEM";
const PLUS_CART_ITEM = "PLUS_CART_ITEM";
const MINUS_CART_ITEM = "MINUS_CART_ITEM";

let initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0
}

const arrReduce = (arr) => {
   return arr.reduce((sum, obj) => obj.price + sum, 0)
}

const cartReducer = (state = initialState, action) => {
   switch (action.type) {

      case ADD_PIZZA_TO_CART: {

         const currentPizzaItem =
            !state.items[action.payload.id]
               ? [action.payload]
               : [...state.items[action.payload.id].items, action.payload]

         const newItems = {
            ...state.items,
            [action.payload.id]: {
               items: currentPizzaItem,
               totalPrice: arrReduce(currentPizzaItem)
            }
         };

         const items = Object.values(newItems).map((obj) => obj.items)
         const allPizzas = [].concat.apply([], items)
         const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

         return {
            ...state,
            items: newItems,
            totalPrice: totalPrice,
            totalCount: allPizzas.length
         }
      }

      case CLEAR_CART:
         return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0
         }

      case REMOVE_PIZZA_ITEM: {
         const newItems = { ...state.items };
         const currentTotalPrice = newItems[action.payload].totalPrice;
         const currentTotalCount = newItems[action.payload].items.length;
         delete newItems[action.payload];

         return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount,
         }
      }

      case SET_TOTAL_PRICE:
         return { ...state, totalPrice: action.payload }

      case SET_TOTAL_COUNT:
         return { ...state, totalCount: action.payload }

      case PLUS_CART_ITEM: {
         const newObjItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0],
         ];
         const newItems = {
            ...state.items,
            [action.payload]: {
               items: newObjItems,
               totalPrice: arrReduce(newObjItems),
            },
         };

         const items = Object.values(newItems).map((obj) => obj.items)
         const allPizzas = [].concat.apply([], items)
         const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

         return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice,
         };
      }

      case MINUS_CART_ITEM: {
         const oldItems = state.items[action.payload].items;
         const newObjItems =
            oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
         const newItems = {
            ...state.items,
            [action.payload]: {
               items: newObjItems,
               totalPrice: arrReduce(newObjItems),
            },
         };

         const items = Object.values(newItems).map((obj) => obj.items)
         const allPizzas = [].concat.apply([], items)
         const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

         return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice,
         };
      }

      default:
         return state
   }
}

export const addPizzaToCartAC = (pizza) => ({ type: ADD_PIZZA_TO_CART, payload: pizza })
export const clearCartAC = () => ({ type: CLEAR_CART })
export const removePizzaItemAC = (id) => ({ type: REMOVE_PIZZA_ITEM, payload: id })

export const setTotalPriceAC = (total) => ({ type: SET_TOTAL_PRICE, payload: total })
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, payload: count })

export const plusCartAC = (id) => ({ type: PLUS_CART_ITEM, payload: id })
export const minusCartAC = (id) => ({ type: MINUS_CART_ITEM, payload: id })

export default cartReducer

// const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
// const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)