import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import ContextProvider from './store/ContextProvider';

function App() {

  const[cartIsShown, setCartIsShown] = useState(false); 

  const showCartHandler = () => {
      setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
}


  return (
   <ContextProvider>
   { cartIsShown && <Cart  onClickClose = {hideCartHandler}/>}
    <Header onCartClick = {showCartHandler}/>
    <main>
      <Meals/>
    </main>
   </ContextProvider>
  );
}

export default App;
