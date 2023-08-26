import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

const Header = ({ onCartClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <NavLink to="/">
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
        </NavLink>
      </div>
      <ul className={styles.headerRight}>
        <li onClick={onCartClick}>
          <img
            width={18}
            height={18}
            alt=""
            src="/img/cart.svg"
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <NavLink to="/favorites">
            <img
              src="/img/favorites.png"
              alt=""
              width={18}
              height={18}
            />
          </NavLink>
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
  );
};

export default Header;
