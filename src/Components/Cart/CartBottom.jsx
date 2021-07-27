import { useSelector } from "react-redux";

import Button from "../Common/Button/Button"
import ComeBack from "../Common/ComeBack/ComeBack";

const CartBottom = (props) => {

   const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

   const onOrder = () => {
      console.log('ВАш заказ', props.items)
   }

   return (
      <div className="cart__bottom">
         <div className="cart__bottom-details">
            <span> Всего пицц: <b>{totalCount} шт.</b> </span>
            <span> Сумма заказа: <b>{totalPrice} ₴</b> </span>
         </div>
         <div className="cart__bottom-buttons">
            <Button className="button--add go-back-btn" outline>
               <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               <ComeBack />
            </Button>
            <div>
               <Button className="pay-btn" onClick={onOrder}>
                  <span>Оплатить сейчас</span>
               </Button>
            </div>
         </div>
      </div>
   )
}

export default CartBottom