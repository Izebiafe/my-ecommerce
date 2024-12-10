import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Navigation() {
  const { cart } = useContext(CartContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors">
            E-Shop
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Products
            </Link>
            <Link to="/cart" className="relative group">
              <span className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-4 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                    {itemCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <Link
              to="/"
              className="block py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="block py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({itemCount})
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation