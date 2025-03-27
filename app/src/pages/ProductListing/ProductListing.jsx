import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { products } from '../../data/products';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState(new Set());
  const categories = [...new Set(products.map(product => product.category))];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedItems(prev => new Set([...prev, product.id]));
  };

  return (
    <div className="container product-listing">
      <h1 className="section-title">Our Plant Collection</h1>
      {categories.map(category => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-actions">
                      <span className="product-price">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addedItems.has(product.id)}
                        className={`add-to-cart-btn ${addedItems.has(product.id) ? 'disabled' : ''}`}
                      >
                        {addedItems.has(product.id) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing; 