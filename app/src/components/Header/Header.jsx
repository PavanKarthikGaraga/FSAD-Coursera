import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="header-title">
          Green Haven
        </Link>
        <nav className="nav-links">
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart" className="nav-link cart-icon">
            <span className="material-icons">shopping_cart</span>
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 