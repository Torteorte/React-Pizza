import { useSelector } from "react-redux";
import CartBottom from "./CartBottom"
import CartItem from "./CartItem/CartItem"
import CartTop from "./CartTop"

const Cart = () => {

   const items = useSelector(({ cart }) => cart.items);

   const addedPizzas = Object.keys(items).map((key) => {
      return items[key].items[0]
   })

   return (
      <div className="container container--cart">
         <div className="cart">
            <CartTop />
            <div className="content__items">
               {addedPizzas.map(obj => <CartItem {...obj} />)}
               {/* <CartItem name={"Сырная"} type={"тонкое"} size={26} price={90} imageUrl={"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"} /> */}
               {/* <CartItem />
               <CartItem />
               <CartItem /> */}
            </div>
            <CartBottom />
         </div>
      </div>
   )
}

export default Cart