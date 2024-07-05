import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img src="/img/logo.png" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Mагазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={props.onClickCart} style={{ cursor: "pointer" }}>
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li style={{ cursor: "pointer" }}>
          <Link to="/fav">
            <img width={18} height={18} src="/img/zak.svg" alt="" />
            <span>Закладки</span>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />

          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
