const Favorites = () => {
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

      <div className="card-wrapper">тут будут закладки</div>
    </div>
  );
};

export default Home;
