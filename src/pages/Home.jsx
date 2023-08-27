import Card from "../components/Card";

const Home = (props) => {
  const {
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    cards,
    onAddToCard,
    onAddToFavorites,
    cartItems,
    favorites,
    isLoading,
  } = props;

  const renderItems = () => {
    const filterItems =
      cards &&
      cards.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    return (isLoading ? [...Array(12)] : filterItems).map((card, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCard(obj)}
        onFavorites={(obj) => onAddToFavorites(obj)}
        isLoading={isLoading}
        added={cartItems.some((obj) => Number(obj.id) === Number(card.id))}
        favorited={favorites.some((obj) => Number(obj.id) === Number(card.id))}
        {...card}
      />
    ));
  };

  return (
    <div className="content">
      <div className="content-wrapper">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="content-search">
          <img
            src="/img/search.svg"
            alt=""
          />
          <input
            value={searchValue}
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
          />
          {searchValue && (
            <img
              className="content-search-clear"
              onClick={() => setSearchValue("")}
              src="/img/buttons/button_remove.svg"
              alt=""
            />
          )}
        </div>
      </div>

      <div className="card-wrapper">{renderItems()}</div>
    </div>
  );
};

export default Home;
