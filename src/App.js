import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Cart from './Components/Cart/Cart';
import CartEmpty from './Components/CartEmpty/CartEmpty';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import axios from "axios";

const App = () => {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios('http://localhost:3000/db.json')
      .then((response) => {
        return response.pizzas
      })
  }, [])

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then(json => {
        setPizzas(json.pizzas)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Redirect from="/" to="/mainpage" />} />
        <Route path='/mainpage' render={() => <MainPage pizzas={pizzas} />} />
        <Route path='/Cart' render={() => <Cart />} />
        <Route path='/CartEmpty' render={() => <CartEmpty />} />
        <Route path='*' render={() => <Redirect to="/mainpage" />} />
      </div>
    </div>
  );
}

export default App;