import { useSelector } from "react-redux"
import Navbar from "./Navbar/Navbar"
import PizzaItem from "./PizzaItem/PizzaItem"

const MainPage = () => {

   const data = useSelector((state) => {
      return {
         pizzas: state.pizzas.items
      }
   })

   return (
      <div className="container">
         <Navbar />
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {data.pizzas.map((item, index) => {
               return <PizzaItem
                  key={item.id}
                  item={item}
               />
            })}
         </div>
      </div>
   )
}

export default MainPage