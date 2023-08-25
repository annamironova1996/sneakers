import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [cards, setCards] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    fetch("https://64e8f49f99cf45b15fe05c4e.mockapi.io/cards")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCards(json);
      });
  }, []);

  return (
    <div className="header-wrapper">
      {openCart && <Cart onClick={() => setOpenCart(false)} />}
      <Header onCartClick={() => setOpenCart(true)} />
      <div className="content">
        <div className="content-wrapper">
          <h1>Все кроссовки</h1>
          <div className="content-search">
            <img
              src="/img/search.svg"
              alt=""
            />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="card-wrapper">
          {cards.map((card) => (
            <Card
              img={card.img}
              title={card.title}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
