export default function Drawer({ onClickClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClickClose}
            className="remove"
            src="/img/2.svg"
            alt=""
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem">
                  <img
                    className="mr"
                    width={70}
                    height={70}
                    src={obj.ImageUrl}
                    alt=""
                  />
                  <div className="mr20">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove"
                    src="/img/2.svg"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="greenButton">
                Оформит Заказ <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty">
            <img src="/img/Cart0.svg" alt="" />
            <h2>Корзина Пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClickClose} className="greenButton">
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
