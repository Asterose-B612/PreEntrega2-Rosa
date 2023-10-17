import './App.css';
import {Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Categories from './components/ItemListContainer/Categories';
import ProductList from './components/products/ProductList';
import CategoriesProductList from './components/ItemListContainer/CategoriesProductList';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    //cartProvider debe estar afuera de todo envolviendo  todas las rutas
  <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/home" element={<Categories />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/category/:categoryId" element={<CategoriesProductList />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
         {/** <Route path="/item/:itemId" element={<ProductDetail />}/>  */} 
          <Route path="*" element={<h1 style={{ marginTop: '10vh' }}>404 NOT FOUND</h1>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
