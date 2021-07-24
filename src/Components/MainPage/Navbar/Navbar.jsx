import React from 'react'
import Categories from './Categories'
import SortPopup from './SortPopup'

const categoryNames = [
   "Мясные",
   "Вегетарианская",
   "Гриль",
   "Острые",
   "Закрытые"
]

const SortPopupNames = [
   { name: 'популярности', type: 'popular', order: 'desc' },
   { name: 'цене', type: 'price', order: 'desc' },
   { name: 'алфавиту', type: 'name', order: 'asc' }
]

const Navbar = (props) => {

   return (
      <div className="content__top">
         <Categories
            activeCategory={props.activeCategory}
            onClickCategory={props.onClickCategory}
            categoryItems={categoryNames}
         />
         <SortPopup
            activeSortBy={props.activeSortBy}
            onClickSortBy={props.onClickSortBy}
            sortItems={SortPopupNames}
         />
      </div>
   )
}

export default Navbar