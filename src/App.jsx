import './App.css'
import Categories from './components/ItemListContainer/Categories';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/products/ProductList';
import CategoriesProductList from './components/ItemListContainer/CategoriesProductList';
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/products/ProductDetail';





//path es el lugar a donde va a ir y cargo en element el elemento por donde quiero que comienze
function App() {

  return (
    <>
      <BrowserRouter>
       
        <NavBar/>

        <Routes>
        <Route exact path='/' element={<Categories/>} />
          <Route exact path='/home' element={<Categories/>} />
          <Route exact path="/products" element={<ProductList/>} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList/>} />
          <Route exact path="/nosotros" element={<Nosotros/>} />
          <Route exact path="/contacto" element={<Contacto/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route path="/item/:itemId" element={<ProductDetail />} />
          <Route path="*" element={<h1 style={{ marginTop: '10vh' }}>404 NOT FOUND</h1>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
