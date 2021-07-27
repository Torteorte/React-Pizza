import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Redirect from="/" to="/mainpage" />} />
        <Route path='/mainpage' render={() => <MainPage />} />
        <Route path='/Cart' render={() => <Cart />} />
        <Route path='*' render={() => <Redirect to="/mainpage" />} />
      </div>
    </div>
  );
}

export default App