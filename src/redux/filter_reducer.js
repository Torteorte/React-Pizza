const SET_CATEGORY = "SET_CATEGORY";
const SET_SORTYBY = "SET_SORTYBY";

let initialState = {
   categoryNames: [
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые"
   ],
   SortPopupNames: [
      { name: 'популярности', type: 'popular', order: 'desc' },
      { name: 'цене', type: 'price', order: 'desc' },
      { name: 'алфавиту', type: 'name', order: 'asc' }
   ],
   category: null,
   sortBy: {
      type: 'popular',
      order: 'desc'
   }
}

let filterReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_CATEGORY:
         return { ...state, category: action.payload }

      case SET_SORTYBY:
         return { ...state, sortBy: action.payload }

      default:
         return state
   }
}

export const setCategorysAC = (catIndex) => ({ type: SET_CATEGORY, payload: catIndex })
export const setSortByAC = ({ type, order }) => ({ type: SET_SORTYBY, payload: { type, order } })

export default filterReducer