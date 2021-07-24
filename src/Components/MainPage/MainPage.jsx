import React from 'react';
import { useSelector } from "react-redux"
import Navbar from "./Navbar/Navbar"
import PizzaItem from "./PizzaItem/PizzaItem"
import { setPizzas } from './../../redux/pizzas_reducer'
import { setCategorysAC, setSortByAC } from './../../redux/filter_reducer'
import { useDispatch } from 'react-redux';
import PizzaLoader from '../Common/Loader/PizzaLoader';

const MainPage = () => {

   const dispatch = useDispatch()
   const pizzas = useSelector(({ pizzas }) => pizzas.items);
   const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
   const { category, sortBy } = useSelector(({ filter }) => filter);

   React.useEffect(() => {
      dispatch(setPizzas(category, sortBy))
   }, [category, sortBy]);

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategorysAC(index));
   }, []);

   const onSortByCategory = React.useCallback((index) => {
      dispatch(setSortByAC(index));
   }, []);

   return (
      <div className="container">
         <Navbar
            activeCategory={category}
            onClickCategory={onSelectCategory}
            activeSortBy={sortBy.type}
            onClickSortBy={onSortByCategory}
         />
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoaded
               ? pizzas.map((item, index) => {
                  return <PizzaItem
                     key={item.id}
                     item={item}
                  />
               })
               : Array(12).fill(0).map((_, index) => <PizzaLoader key={index} />)}
         </div>
      </div>
   )
}

export default MainPage