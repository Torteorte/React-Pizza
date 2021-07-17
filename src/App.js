import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Cart from './Components/Cart/Cart';
import CartEmpty from './Components/CartEmpty/CartEmpty';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      {/* <Cart /> */}
      {/* <CartEmpty /> */}
    </div>

  );
}

export default App;