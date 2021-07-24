import React from 'react'

const Categories = (props) => {

   const categoryItem = props.categoryItems && props.categoryItems.map((item, index) => {
      return <li key={item} className={props.activeCategory === index ? "active" : ""} onClick={() => props.onClickCategory(index)} >{item}</li>
   })

   return (
      <div className="categories">
         <ul>
            <li className={props.activeCategory === null ? "active" : ""} onClick={() => props.onClickCategory(null)}>Все</li>
            {categoryItem}
         </ul>
      </div>
   )
}

export default Categories
