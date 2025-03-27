# Green Haven - Houseplant E-commerce Application

A modern, responsive e-commerce application for houseplants built with React, Redux, and Vite. This project demonstrates the implementation of a full-featured shopping cart system with a clean, user-friendly interface.

## Features

- 🏠 **Landing Page**
  - Beautiful hero section with background image
  - Company introduction
  - Call-to-action button for product browsing

- 🌿 **Product Listing**
  - Organized display of houseplants by categories
  - Six unique plant varieties
  - Detailed product cards with images and descriptions
  - Add to cart functionality

- 🛒 **Shopping Cart**
  - Real-time cart updates
  - Quantity management (increase/decrease)
  - Item removal
  - Total cost calculation
  - Checkout button (Coming Soon)
  - Continue shopping option

- 🎨 **UI/UX**
  - Responsive design for all screen sizes
  - Material Icons integration
  - Smooth transitions and hover effects
  - Consistent styling across components

## Technologies Used

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Vite for build tooling
- CSS3 for styling
- Material Icons for UI elements

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd green-haven
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── Header/
├── pages/
│   ├── LandingPage/
│   ├── ProductListing/
│   └── ShoppingCart/
├── store/
│   └── cartSlice.js
├── data/
│   └── products.js
└── styles/
    └── global.css
```

## Features Implementation

### Redux Store
- Cart state management
- Add/remove items
- Quantity updates
- Total cost calculation

### Routing
- Landing page (/)
- Product listing (/products)
- Shopping cart (/cart)

### Responsive Design
- Mobile-first approach
- Grid-based layouts
- Flexible image handling
- Adaptive typography

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material Icons for the UI elements
- Unsplash for the plant images
- React and Redux communities for the amazing tools and documentation
