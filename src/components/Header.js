const Header = () => {
  return (
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
  );
};

export default Header;
