import './App.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import CategoriesProductList from './components/categories/CategoriesProductList'
import Navbar from './components/Navbar/Navbar'

//path es el lugar a donde va a ir y cargo en element el elemento por donde quiero que comienze
function App() {

  return (
    <>
      <Router>
       
       
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Categories />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
