import { useContext, useState } from 'react';
import { React } from 'react';
import { MainContext } from '../../App';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.sass';

const Card = (props) => {
    const {
        title,
        img,
        price,
        id,
        onPlus,
        onFavorites,
        favorited = false,
        loading = false,
    } = props;

    const { getAddedItems } = useContext(MainContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    console.log(title, getAddedItems(id));

    const handleClickFavorite = () => {
        onFavorites({ title, img, price, id });
        setIsFavorite(!isFavorite);
    };

    const handleClickPlus = () => {
        onPlus({ title, img, price, id });
        getAddedItems();
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={210}
                    height={187}
                    viewBox="0 0 210 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect
                        x="0"
                        y="0"
                        rx="10"
                        ry="10"
                        width="210"
                        height="91"
                    />
                    <rect
                        x="0"
                        y="111"
                        rx="3"
                        ry="3"
                        width="210"
                        height="15"
                    />
                    <rect
                        x="0"
                        y="134"
                        rx="3"
                        ry="3"
                        width="140"
                        height="15"
                    />
                    <rect
                        x="0"
                        y="167"
                        rx="3"
                        ry="3"
                        width="110"
                        height="18"
                    />
                    <rect
                        x="168"
                        y="156"
                        rx="3"
                        ry="3"
                        width="38"
                        height="29"
                    />
                </ContentLoader>
            ) : (
                <>
                    {onFavorites && (
                        <button className={styles.cardFavorites}>
                            <img
                                onClick={handleClickFavorite}
                                width="100%"
                                height="100%"
                                alt="кнопка"
                                src={
                                    isFavorite
                                        ? '/img/buttons/heart_liked.svg'
                                        : '/img/buttons/heart_unliked.svg'
                                }
                            />
                        </button>
                    )}
                    <img
                        width={133}
                        height={112}
                        src={img}
                        alt="изображение товара"
                    />
                    <h5>{title}</h5>
                    <div className={styles.cardDescription}>
                        <div className={styles.cardPrice}>
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {onPlus && (
                            <button
                                className="button"
                                onClick={handleClickPlus}
                            >
                                <img
                                    width={32}
                                    height={32}
                                    alt="кнопка"
                                    src={
                                        getAddedItems(id)
                                            ? 'img/buttons/button_checked.svg'
                                            : '/img/buttons/button_plus.svg'
                                    }
                                />
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
