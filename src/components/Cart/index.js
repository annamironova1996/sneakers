import styles from "./Cart.module.sass";

const Cart = ({ onClick }) => {
  return (
    <div className="overlay">
      <div className={styles.cart}>
        <div className={styles.cartTitleWrapper}>
          <h2>Корзина</h2>
          <button
            onClick={onClick}
            className={styles.cartCloseButton}
          >
            <img
              src="/img/buttons/button_remove.svg"
              alt=""
            />
          </button>
        </div>

        <div className={styles.cartItems}>
          <div className={styles.cartItem}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className={styles.cartItemImg}
            ></div>
            <div className={styles.cartItemDescription}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <button className={styles.cartCloseButton}>
              <img
                src="/img/buttons/button_remove.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <ul className={styles.cartEnd}>
          <li className={styles.cartEndList}>
            <span>Итого</span>
            <div className={styles.cartEndLine}></div>
            <b>21 498 руб.</b>
          </li>
          <li className={styles.cartEndList}>
            <span>Налог 5%:</span>
            <div className={styles.cartEndLine}></div>
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
