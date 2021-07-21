import React from 'react'
import Categories from './Categories'
import SortPopup from './SortPopup'

const Navbar = () => {
   return (
      <div className="content__top">
         <Categories onClick={(name) => { console.log(name) }} categoryItems={
            ["Мясные",
               "Вегетарианская",
               "Гриль",
               "Острые",
               "Закрытые"]
         } />
         <SortPopup categoryItems={
            ["популярности",
               "цене",
               "алфавиту"]
         } />
      </div>
   )
}

export default Navbar