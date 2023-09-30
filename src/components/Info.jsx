import { React } from 'react';
import styles from '../components/Cart/Cart.module.sass';

const Info = ({ title, description, img, onClick }) => {
    return (
        <div className={styles.cartBox}>
            <img
                className={styles.cartBoxImg}
                src={img}
                alt="пустая коробка"
            />
            <p>{title}</p>
            <span>{description}</span>
            <button
                onClick={onClick}
                className="main-button"
            >
                Вернуться назад
            </button>
        </div>
    );
};

export default Info;
