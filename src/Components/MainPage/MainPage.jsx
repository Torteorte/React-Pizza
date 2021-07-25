import React from 'react';
import { useSelector } from "react-redux"
import Navbar from "./Navbar/Navbar"
import PizzaItem from "./PizzaItem/PizzaItem"
import { setPizzas } from './../../redux/pizzas_reducer'
import { setCategorysAC, setSortByAC } from './../../redux/filter_reducer'
import { useDispatch } from 'react-redux';
import PizzaLoader from '../Common/Loader/PizzaLoader';
import { addPizzaToCartAC } from '../../redux/cart_reducer';

const MainPage = () => {

   const dispatch = useDispatch()
   const pizzas = useSelector(({ pizzas }) => pizzas.items);
   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
   const cartItems = useSelector(({ cart }) => cart.items);
   const { category, sortBy } = useSelector(({ filter }) => filter);

   React.useEffect(() => {
      dispatch(setPizzas(category, sortBy))
   }, [category, sortBy]);

   const handleOnSelectCategory = React.useCallback((index) => {
      dispatch(setCategorysAC(index));
   }, []);

   const handleOnSortByCategory = React.useCallback((index) => {
      dispatch(setSortByAC(index));
   }, []);

   const handleAddPizzaToCart = (obj) => {
      dispatch(addPizzaToCartAC(obj));
   };

   return (
      <div className="container">
         <Navbar
            activeCategory={category}
            onClickCategory={handleOnSelectCategory}
            activeSortBy={sortBy.type}
            onClickSortBy={handleOnSortByCategory}
         />
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoaded
               ? pizzas.map((item, index) => {
                  return <PizzaItem
                     key={item.id}
                     {...item}
                     onClickAddPizza={handleAddPizzaToCart}
                     thisPizzaCount={cartItems[item.id] && cartItems[item.id].length}
                  />
               })
               : Array(12).fill(0).map((_, index) => <PizzaLoader key={index} />)}
         </div>
      </div>
   )
}

export default MainPage