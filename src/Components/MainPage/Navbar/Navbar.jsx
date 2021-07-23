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
            [{ name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' }]
         } />
      </div>
   )
}

export default Navbar