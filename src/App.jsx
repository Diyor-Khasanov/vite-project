import React, { useState } from "react";
import "./App.scss";

// 🔌 Sample Data
const sampleProduct = {
  img: "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg",
  name: "Blue Yeti USB Microphone",
  price: 129,
  company: "Blue Microphones",
  rating: 4.6,
};

const categories = [
  "Monitors",
  "Keyboards",
  "Mice",
  "Headsets",
  "SSD",
  "Accessories",
];

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔧 Handlers
  const addToCart = () => setCart([...cart, sampleProduct]);
  const addToFavorites = () => setFavorites([...favorites, sampleProduct]);
  const removeCartItem = (item) => setCart(cart.filter((i) => i !== item));
  const removeFavorite = (item) =>
    setFavorites(favorites.filter((i) => i !== item));

  return (
    <div className="app">
      <h1>🎧 Equipment Shop</h1>

      {/* 🔹 ProductDetails */}
      <div className="product-details">
        <img src={sampleProduct.img} alt={sampleProduct.name} />
        <div className="info">
          <h2>{sampleProduct.name}</h2>
          <p>{sampleProduct.company}</p>
          <p className="price">${sampleProduct.price}</p>
          <p className="rating">⭐ {sampleProduct.rating}</p>
          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={addToFavorites}>Add to Favorites</button>
        </div>
      </div>

      {/* 🔹 CartPage */}
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item, i) => (
                <div className="cart-item" key={i}>
                  <img src={item.img} alt={item.name} />
                  <div className="info">
                    <h4>{item.name}</h4>
                    <p>{item.company}</p>
                    <span>${item.price}</span>
                  </div>
                  <button onClick={() => removeCartItem(item)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>
                Total: ${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}
              </h3>
              <button className="checkout">Checkout</button>
            </div>
          </>
        )}
      </div>

      {/* 🔹 FavoritesPage */}
      <div className="favorites-page">
        <h2>Your Favorites</h2>
        {favorites.length === 0 ? (
          <p className="empty">No favorites yet.</p>
        ) : (
          <div className="favorites-list">
            {favorites.map((item, i) => (
              <div className="fav-item" key={i}>
                <img src={item.img} alt={item.name} />
                <div className="info">
                  <h4>{item.name}</h4>
                  <p>{item.company}</p>
                  <span>${item.price}</span>
                </div>
                <button onClick={() => removeFavorite(item)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔹 CatalogModal */}
      <button className="open-modal" onClick={() => setIsModalOpen(true)}>
        Open Catalog Modal
      </button>
      {isModalOpen && (
        <div className="catalog-modal">
          <div className="backdrop" onClick={() => setIsModalOpen(false)}></div>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h3>Categories</h3>
            <ul>
              {categories.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
