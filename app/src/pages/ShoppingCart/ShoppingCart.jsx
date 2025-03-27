import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../store/cartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container shopping-cart">
      <h1 className="section-title">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="cart-summary">
          <p>Your cart is empty</p>
          <Link
            to="/products"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: ${total.toFixed(2)}</p>
          </div>

          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="quantity-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link
              to="/products"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => alert('Coming Soon!')}
              className="checkout-btn"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart; 