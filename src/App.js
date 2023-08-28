import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
export const MainContext = React.createContext({});

function App() {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get("http://localhost:3001/cart");
      const favoritesResponse = await axios.get(
        "http://localhost:3001/favorites"
      );
      const cardResponse = await axios.get("http://localhost:3001/cards");

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setCards(cardResponse.data);
    }
    fetchData();
  }, []);

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`http://localhost:3001/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "http://localhost:3001/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onAddToCard = async (obj) => {
    try {
      if (cartItems.find((cartObj) => cartObj.id === obj.id)) {
        axios.delete(`http://localhost:3001/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      }
      const { data } = await axios.post("http://localhost:3001/cart", obj);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {
      console.log("Не удалось добавить в корзину");
    }
  };

  const onRemoveCartItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const getAddedItems = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <MainContext.Provider
      value={{ favorites, getAddedItems, cards, cartItems, setCartItems }}
    >
      <div className="header-wrapper">
        <Cart
          items={cartItems}
          onClick={() => setOpenCart(false)}
          onRemoveCartItem={onRemoveCartItem}
          openCart={openCart}
        />

        <Header onCartClick={() => setOpenCart(true)} />

        <Routes>
          <Route
            path="/orders"
            element={<Orders />}
            exact
          />
          <Route
            path="/favorites"
            exact
            element={
              <Favorites
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                onAddToFavorites={onAddToFavorites}
              />
            }
          />

          <Route
            path="/"
            exact
            element={
              <Home
                favorites={favorites}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                cards={cards}
                onAddToCard={onAddToCard}
                onAddToFavorites={onAddToFavorites}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </div>
    </MainContext.Provider>
  );
}

export default App;
