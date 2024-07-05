import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
export default function Card({
  ImageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  Load = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFav, setIsFav] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ ImageUrl, title, price });
    setIsAdded(!isAdded);
  };
  const onFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className={styles.card}>
      {Load ? (
        <ContentLoader viewBox="155 0 156 256" height={280} width={500}>
          <rect x="1" y="0" rx="20" ry="20" width="150" height="155" />
          <rect x="6" y="167" rx="0" ry="0" width="150" height="15" />
          <rect x="6" y="187" rx="0" ry="0" width="96" height="15" />
          <rect x="6" y="234" rx="0" ry="0" width="50" height="15" />
        </ContentLoader>
      ) : (
        <>
          
          <div className={styles.favorite} onClick={onFavorite}>
            <img
              onClick={onFav}
              src={isFav ? "/img/love1.svg" : "/img/love0.svg"}
              alt=""
            />
          </div>
          <img width={133} height={112} src={ImageUrl} alt="" />
          <h5>{title}</h5>
          <div className={styles.cardButton}>
            <div className={styles.fl1}>
              <span>Цена:</span>
              <b>{price}</b>
            </div>

            <img
              onClick={onClickPlus}
              src={isAdded ? "/img/btnOk.svg" : "/img/plus1.svg"}
              alt=""
            />
          </div>
        </>
      )}
      {/* <div className={styles.favorite} onClick={onFavorite}>
        <img
          onClick={onFav}
          src={isFav ? "/img/love1.svg" : "/img/love0.svg"}
          alt=""
        />
      </div>
      <img width={133} height={112} src={ImageUrl} alt="" />
      <h5>{title}</h5>
      <div className={styles.cardButton}>
        <div className={styles.fl1}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>

        <img
          onClick={onClickPlus}
          src={isAdded ? "/img/btnOk.svg" : "/img/plus1.svg"}
          alt=""
        />
      </div> */}
    </div>
  );
}
