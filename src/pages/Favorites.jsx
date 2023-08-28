import React from "react";
import Card from "../components/Card";
import { MainContext } from "../App";

const Favorites = (props) => {
  const { favorites } = React.useContext(MainContext);

  const { searchValue, onChangeSearchInput, setSearchValue, onAddToFavorites } =
    props;

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
        <div>
          {favorites.map((card) => (
            <Card
              key={card.id}
              favorited={true}
              onFavorites={onAddToFavorites}
              {...card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
