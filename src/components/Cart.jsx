import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cart.length === 0) {
    return (
      <div className="container py-5 min-vh-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 text-center">
            <i className="bi bi-cart fs-1 text-secondary mb-4 d-block"></i>
            <h2 className="mb-4">Your cart is empty</h2>
            <p className="text-muted mb-4">Add some products to your cart and they will show up here</p>
            <Link to="/" className="btn btn-primary d-inline-flex align-items-center">
              <i className="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart ({cart.length} items)</h2>
      
      <div className="row">
        <div className="col-lg-8">
          {cart.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="text-muted small">{item.brand}</p>
                    <p className="card-text">₦{item.price.toLocaleString()}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="input-group-text">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-link text-danger mt-2"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="col-md-2 text-end">
                    <strong>₦{(item.price * item.quantity).toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>₦{total.toLocaleString()}</strong>
              </div>
              
              <div className="d-grid gap-2">
                <Link to="/checkout" className="btn btn-primary">
                  Proceed to Checkout
                </Link>
                <Link to="/" className="btn btn-outline-secondary">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart