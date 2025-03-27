import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div 
        className="hero-background"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')"
        }}
      />
      <div className="hero-content">
        <div>
          <h1 className="hero-title">
            Welcome to Green Haven
          </h1>
          <p className="hero-description">
            Your one-stop shop for beautiful houseplants. We offer a carefully curated selection
            of indoor plants that will bring life and beauty to your home or office.
            Whether you're a seasoned plant parent or just starting your green journey,
            we have the perfect plants for you.
          </p>
          <Link
            to="/products"
            className="get-started-btn"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 