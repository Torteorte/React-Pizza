import React from 'react'

const Categories = (props) => {
   const [activeItem, setactiveItem] = React.useState(null)

   const onSelectItem = (index) => {
      setactiveItem(index)
   }

   console.log("Render")

   const categoryItem = props.categoryItems && props.categoryItems.map((item, index) => {
      return <li key={item} className={activeItem === index ? "active" : ""} onClick={() => { onSelectItem(index) }} >{item}</li>
   })

   return (
      <div className="categories">
         <ul>
            <li className={activeItem === null ? "active" : ""} onClick={() => { onSelectItem(null) }}>Все</li>
            {categoryItem}
         </ul>
      </div>
   )
}

export default Categories
