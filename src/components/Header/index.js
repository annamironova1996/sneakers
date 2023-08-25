import styles from "./Header.module.sass";

const Header = ({ onCartClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
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
  );
};

export default Header;
