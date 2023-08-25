const Cart = () => {
  return (
    <div
      style={{ display: "none" }}
      className="overlay"
    >
      <div className="cart">
        <div className="cart-title-wrapper">
          <h2>Корзина</h2>
          <button className="cart-close-button">
            <img
              src="/img/buttons/button_remove.svg"
              alt=""
            />
          </button>
        </div>

        <div className="cart-items">
          <div className="cart-item">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cart-item-img"
            ></div>
            <div className="cart-item-description">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <button className="cart-close-button">
              <img
                src="/img/buttons/button_remove.svg"
                alt=""
              />
            </button>
          </div>
          <div className="cart-item">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cart-item-img"
            ></div>
            <div className="cart-item-description">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <button className="cart-close-button">
              <img
                src="/img/buttons/button_remove.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <ul className="cart-end">
          <li>
            <span>Итого</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="green-button">
          Оформить заказ
          <img
            src="/img/arrow.svg"
            width={14}
            height={12}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;
