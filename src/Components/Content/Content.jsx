import Navbar from "./Navbar/Navbar"
import PizzaItem from "./PizzaItem/PizzaItem"

const Content = () => {
   return (
      <div className="container">
         <Navbar />
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
         </div>
      </div>
   )
}

export default Content