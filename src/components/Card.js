const Card = () => {
  return (
    <div className="card">
      <button className="card-favorites">
        <img
          width="100%"
          height="100%"
          src="/img/buttons/heart_unliked.svg"
        />
      </button>

      <img
        width={133}
        height={112}
        src="/img/sneakers/1.jpg"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card-description">
        <div className="card-price">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img
            width={32}
            height={32}
            src="/img/buttons/button_plus.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
