import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import CartBottom from "./CartBottom"
import CartTop from "./CartTop"
import CartItem from "./CartItem/CartItem"
import CartEmpty from './CartEmpty/CartEmpty';
import { minusCartAC, plusCartAC, removePizzaItemAC } from '../../redux/cart_reducer';

const Cart = () => {

   const dispatch = useDispatch()

   const { items, totalCount } = useSelector(({ cart }) => cart);

   const addedPizzas = Object.keys(items).map((key) => {
      return items[key].items[0]
   })

   const removePizzaItemFromCart = (id) => {
      dispatch(removePizzaItemAC(id));
   };

   const onPlusCart = (id) => {
      dispatch(plusCartAC(id));
   };

   const onMinusCart = (id) => {
      dispatch(minusCartAC(id));
   };

   return (
      <div className="container container--cart">
         {totalCount
            ? <div className="cart">
               <CartTop />
               <div className="content__items">
                  {addedPizzas
                     .map(obj => <CartItem
                        key={obj.id}
                        {...obj}
                        totalPrice={items[obj.id].totalPrice}
                        totalCount={items[obj.id].items.length}
                        removePizzaItem={removePizzaItemFromCart}
                        onPlusCart={onPlusCart}
                        onMinusCart={onMinusCart}
                     />)}
               </div>
               <CartBottom items={items} />
            </div>
            : <CartEmpty />}

      </div>
   )
}

export default Cart