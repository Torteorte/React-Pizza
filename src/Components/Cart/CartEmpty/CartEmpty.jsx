import Button from '../../Common/Button/Button'
import ComeBack from '../../Common/ComeBack/ComeBack'
import emptyCartImg from './../../../assets/img/empty-cart.png'

const CartEmpty = () => {
   return (
      <div className="cart cart--empty">
         <h2>Корзина пустая 😕</h2>
         <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
         </p>
         <img src={emptyCartImg} alt="Empty cart" />
         <Button className="button--black">
            <ComeBack />
         </Button>
      </div>
   )
}

export default CartEmpty