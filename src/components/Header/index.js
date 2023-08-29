import { useContext } from "react";
import { MainContext } from "../../App";
import { Link } from "react-router-dom";
import styles from "./Header.module.sass";

const Header = ({ onCartClick }) => {
  const { cartItems } = useContext(MainContext);

  const totalPrice = cartItems.reduce(
    (sum, obj) => parseInt(obj.price) + sum,
    0
  );

  return (
    <header className={styles.header}>
      <Link
        className={styles.headerLeft}
        to="/"
      >
        <img
          src="/img/logo.png"
          className="mr-15"
          width={40}
          height={40}
        />

        <div>
          <h3 className={styles.logo}>sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </Link>

      <ul className={styles.headerRight}>
        <li onClick={onCartClick}>
          <img
            width={18}
            height={18}
            alt=""
            src="/img/cart.svg"
          />
          <span>{totalPrice} руб.</span>
        </li>

        <li>
          <Link to="/favorites">
            <img
              src="/img/favorite.svg"
              alt=""
              width={18}
              height={18}
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              alt=""
              src="/img/user.svg"
              width={18}
              height={18}
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
