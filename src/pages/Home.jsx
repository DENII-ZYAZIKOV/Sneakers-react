import Card from "../components/Card";
import React from "react";

export default function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddFavorite,
}) {
  const renderItems = () => {
    return items
      .filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((obj, index) => (
        <Card
          key={index}
          title={obj.name}
          price={obj.price}
          ImageUrl={obj.ImageUrl}
          onFavorite={(el) => onAddFavorite(el)}
          onPlus={(el) => onAddToCart(el)}
        />
      ));
  };
  return (
    <div className="content">
      <div className="d-flex">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="sneakers">
        {renderItems()}
      </div>
    </div>
  );
}
