import React from 'react'
import { useSelector } from 'react-redux';

import Categories from './Categories'
import SortPopup from './SortPopup'

const Navbar = (props) => {

   const { categoryNames, SortPopupNames } = useSelector(({ filter }) => filter);

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