import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navigation from './components/Navigation'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import './index.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="w-full min-h-screen bg-white">
          <Navigation />
          <main className="w-full bg-white">
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </Router>
  )
}

export default App