import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";

function App() {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/cards").then((res) => {
      setCards(res.data);
    });
    axios.get("http://localhost:3001/cart").then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToFavorites = (obj) => {
    axios.post("http://localhost:3001/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onAddToCard = (obj) => {
    axios.post("http://localhost:3001/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveCartItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="header-wrapper">
      {openCart && (
        <Cart
          items={cartItems}
          onClick={() => setOpenCart(false)}
          onRemoveCartItem={onRemoveCartItem}
        />
      )}
      <Header onCartClick={() => setOpenCart(true)} />

      <Route path="/">
        <Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          cards={cards}
          onAddToCard={onAddToCard}
          onAddToFavorites={onAddToFavorites}
        />
      </Route>
    </div>
  );
}

export default App;
