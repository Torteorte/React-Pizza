import Navbar from "./Navbar/Navbar"
import PizzaItem from "./PizzaItem/PizzaItem"

const MainPage = (props) => {
   return (
      <div className="container">
         <Navbar />
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {props.pizzas.map((item, index) => {
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