import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="header-wrapper">
      <Cart />
      <Header />
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

        <div className="d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
