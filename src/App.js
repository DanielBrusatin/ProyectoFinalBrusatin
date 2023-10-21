import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles-sheets/App.css'

const App = () => {
  return (
    <BrowserRouter className='principal'>
      <CartContextProvider >
        <NavBar />
        <div className='principal'>
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;