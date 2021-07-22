import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Cart from './Components/Cart/Cart';
import CartEmpty from './Components/CartEmpty/CartEmpty';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import axios from "axios";
import { setPizzasAC } from './redux/pizzas_reducer'
import { connect } from 'react-redux';
class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setPizzasAC(data.pizzas)
      })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Redirect from="/" to="/mainpage" />} />
          <Route path='/mainpage' render={() => <MainPage pizzas={this.props.items} />} />
          <Route path='/Cart' render={() => <Cart />} />
          <Route path='/CartEmpty' render={() => <CartEmpty />} />
          <Route path='*' render={() => <Redirect to="/mainpage" />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps, { setPizzasAC })(App)