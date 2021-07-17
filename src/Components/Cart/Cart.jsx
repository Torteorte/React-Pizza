import CartBottom from "./CartBottom"
import CartItem from "./CartItem/CartItem"
import CartTop from "./CartTop"

const Cart = () => {
   return (
      <div className="container container--cart">
         <div className="cart">
            <CartTop />
            <div className="content__items">
               <CartItem />
               <CartItem />
               <CartItem />
               <CartItem />
            </div>
            <CartBottom />
         </div>
      </div>
   )
}

export default Cart