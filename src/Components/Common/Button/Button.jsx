import classNames from "classnames"

const Button = (props) => {
   return (
      <button className={classNames('button ',
         { 'button--outline': props.outline },
         { 'button--add': props.add },
         { 'button--black': props.black },
         { 'button--cart': props.cart },
         { 'button--circle': props.circle },
         { 'pay-btn': props.pay },
         { 'go-back-btn': props.back }
      )} > {props.children} </button>
   )
}

export default Button