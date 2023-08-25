import { useState } from "react";
import styles from "./Card.module.sass";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClickPlus = () => {
    setIsAdded(!isAdded);
  };

  const { title, img, price } = props;
  return (
    <div className={styles.card}>
      <button className={styles.cardFavorites}>
        <img
          width="100%"
          height="100%"
          src="/img/buttons/heart_unliked.svg"
        />
      </button>

      <img
        width={133}
        height={112}
        src={img}
      />
      <h5>{title}</h5>
      <div className={styles.cardDescription}>
        <div className={styles.cardPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button
          className="button"
          onClick={handleClickPlus}
        >
          <img
            width={32}
            height={32}
            src={
              isAdded
                ? "img/buttons/button_checked.svg"
                : "/img/buttons/button_plus.svg"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
