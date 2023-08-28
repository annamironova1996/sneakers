import { React } from "react";
import styles from "../components/Cart/Cart.module.sass";

const Info = ({ title, description, img, onClick }) => {
  return (
    <div className={styles.cartBox}>
      <img
        className={styles.cartBoxImg}
        src={img}
      />
      <p>{title}</p>
      <span>{description}</span>
      <button
        onClick={onClick}
        className="green-button"
      >
        <img
          src="/img/back_arrow.svg"
          width={14}
          height={12}
        />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
