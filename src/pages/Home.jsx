import Card from "../components/Card";

const Home = (props) => {
  const {
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    cards,
    onAddToCard,
    onAddToFavorites,
  } = props;
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

      <div className="card-wrapper">
        {cards
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((card) => (
            <Card
              key={card.id}
              img={card.img}
              title={card.title}
              price={card.price}
              onPlus={(obj) => onAddToCard(obj)}
              onFavorites={(obj) => onAddToFavorites(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
