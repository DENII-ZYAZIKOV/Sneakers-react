import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import React from "react";

function App() {
  const draw = [];

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://66663088d122c2868e4947e4.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://66663088d122c2868e4947e4.mockapi.io/carts")
      .then((res) => {
        setCartItems(res.data);
      });
    setIsLoading(false);
  }, []);
  const onAddToCart = (obj) => {
    axios.post("https://66663088d122c2868e4947e4.mockapi.io/carts", obj);
    setCartItems((prev) => [...cartItems, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`https://66663088d122c2868e4947e4.mockapi.io/carts/${id}`);
  };
  const onAddFavorite = (obj) => {
    axios.post("", obj);
    setFavorites((prev) => [...prev, obj]);
  };
  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClickClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
              isLoading={!items.length}
            />
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
