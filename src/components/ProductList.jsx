import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { products } from '../data/products'

function ProductList() {
  const { addToCart } = useContext(CartContext)
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...new Set(products.map(product => product.category))]
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h3 className="mb-3">Categories</h3>
        <div className="d-flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${
                selectedCategory === category
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <div className="p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted small">{product.brand}</p>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">₦{product.price.toLocaleString()}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList