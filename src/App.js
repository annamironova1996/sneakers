function App() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-left">
          <img
            src="/img/logo.png"
            className="mr-15"
            width={40}
            height={40}
          />
          <div>
            <h3 className="text-uppercase">sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-right">
          <li>
            <img
              width={18}
              height={18}
              alt=""
              src="/img/cart.svg"
            />
            <span className="ml-10">1205 руб.</span>
          </li>
          <li>
            <img
              src="/img/favorites.svg"
              alt=""
              width={18}
              height={18}
            />
          </li>
          <li>
            <img
              alt=""
              src="/img/user.svg"
              width={18}
              height={18}
            />
          </li>
        </ul>
      </header>
      <div className="contant">
        <h1>Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-description">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/plus.svg"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-description">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/plus.svg"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-description">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/plus.svg"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-description">
              <div className="card-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/plus.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
