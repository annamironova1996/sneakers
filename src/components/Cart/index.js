import styles from "./Cart.module.sass";
import axios from "axios";
import Info from "../Info";
import { MainContext } from "../../App";
import { useContext, useState } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Cart = ({ onClick, items, onRemoveCartItem, openCart }) => {
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { setCartItems, cartItems } = useContext(MainContext);
  const [orderLoading, setIsLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, obj) => parseInt(obj.price) + sum,
    0
  );

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("http://localhost:3001/orders", {
        items: cartItems,
      });

      setOrderId(data.id);
      setOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < Array.length; i++) {
        const item = cartItems[i];
        await axios.delete("http://localhost:3001/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      console.log("Не удалось отправить заказ");
    }
    setIsLoading(false);
  };

  return (
    <div className={${styles.overlay} ? ${opened ? styles.overlayVisable }}>
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
        {items.length > 0 ? (
          <section>
            <div className={styles.cartItems}>
              {items.map((item) => (
                <div
                  key={item.id}
                  className={styles.cartItem}
                >
                  <div
                    style={{ backgroundImage: `url(${item.img})` }}
                    className={styles.cartItemImg}
                  ></div>

                  <div className={styles.cartItemDescription}>
                    <p>{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <button className={styles.cartCloseButton}>
                    <img
                      onClick={() => onRemoveCartItem(item.id)}
                      src="/img/buttons/button_remove.svg"
                      alt=""
                    />
                  </button>
                </div>
              ))}
            </div>
            <ul className={styles.cartEnd}>
              <li className={styles.cartEndList}>
                <span>Итого</span>
                <div className={styles.cartEndLine}></div>
                <b>{totalPrice} руб.</b>
              </li>
              <li className={styles.cartEndList}>
                <span>Налог 5% :</span>
                <div className={styles.cartEndLine}></div>
                <b>{Math.ceil((totalPrice / 100) * 5)}руб.</b>
              </li>
            </ul>
            <button
              onClick={onClickOrder}
              disabled={orderLoading}
              className="green-button"
            >
              Оформить заказ
              <img
                src="/img/arrow.svg"
                width={14}
                height={12}
              />
            </button>
          </section>
        ) : (
          <Info
            title={orderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              orderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
            }
            img={orderCompleted ? "/img/order.png" : "/img/box.png"}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
