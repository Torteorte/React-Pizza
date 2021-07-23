import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Cart from './Components/Cart/Cart';
import CartEmpty from './Components/CartEmpty/CartEmpty';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import axios from "axios";
import { setPizzasAC } from './redux/pizzas_reducer'
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        dispatch(setPizzasAC(data))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Redirect from="/" to="/mainpage" />} />
        <Route path='/mainpage' render={() => <MainPage />} />
        <Route path='/Cart' render={() => <Cart />} />
        <Route path='/CartEmpty' render={() => <CartEmpty />} />
        <Route path='*' render={() => <Redirect to="/mainpage" />} />
      </div>
    </div>
  );
}

export default App