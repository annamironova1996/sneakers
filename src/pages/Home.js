import React from 'react';
import { MainContext } from '../App';
import Card from '../components/Card';

const Home = (props) => {
    const {
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        cards,
        onAddToCard,
        onAddToFavorites,
        favorites,
        isLoading,
    } = props;

    const { getAddedItems } = React.useContext(MainContext);

    const renderItems = () => {
        const filterItems =
            cards &&
            cards.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
        return (isLoading ? [...Array(12)] : filterItems).map((card) => (
            <Card
                key={card && card.id}
                onPlus={(obj) => onAddToCard(obj)}
                onFavorites={(obj) => onAddToFavorites(obj)}
                added={getAddedItems(card && card.id)}
                isLoading={isLoading}
                favorited={favorites.some(
                    (obj) => Number(obj.id) === Number(card.id)
                )}
                {...card}
            />
        ));
    };

    return (
        <div className="content">
            <section className="content-banner">
                <div className="content-banner-wrapper">
                    <img
                        className="content-banner-img"
                        src="img/banner.jpg"
                        alt="баннер"
                    />
                </div>
            </section>
            <div className="content-wrapper">
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : 'Все кроссовки'}
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
                            onClick={() => setSearchValue('')}
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
