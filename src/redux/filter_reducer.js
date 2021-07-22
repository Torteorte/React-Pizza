const SET_CATEGORY = "SET_CATEGORY";
const SET_SORTYBY = "SET_SORTYBY";

let initialState = {
   categorys: 0,
   sortby: "popular"
}

let filterReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_CATEGORY:
         return { ...state, categorys: action.payload }

      case SET_SORTYBY:
         return { ...state, sortby: action.payload }

      default:
         return state
   }
}

export const setCategorysAC = (categorys) => ({ type: SET_CATEGORY, payload: categorys })
export const setSortbyAC = (sortby) => ({ type: SET_SORTYBY, payload: sortby })

export default filterReducer