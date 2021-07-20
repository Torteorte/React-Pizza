import Header from './Components/Header/Header';
import MainPage from './Components/Content/MainPage';
import Cart from './Components/Cart/Cart';
import CartEmpty from './Components/CartEmpty/CartEmpty';
import { Redirect, Route } from 'react-router-dom';

const App = () => {
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

export default App;