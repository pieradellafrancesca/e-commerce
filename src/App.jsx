import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CardList from "./components/cardList";
import Footer from "./components/footer";
import ProductDetail from "./components/productDetail";
import ModalCart from "./components/modalCart/ModalCart";

import "./App.css";

function App() {
  const [categoryInput, setCategoryInput] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisible: false,
  });
  const [isCartVisible, setCartVisibility] = useState(false);

  const localStorageCartList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]");

  return (
    <div className="App">
      <Navbar
        setCategoryInput={setCategoryInput}
        setCategorySelect={setCategorySelect}
        cartListLength={
          localStorageCartList.reduce((acc, item) => acc + item.quantity, 0) ||
          cartList.reduce((acc, item) => acc + item.quantity, 0)
        }
        setCartVisibility={setCartVisibility}
      />
      <Hero />
      <MiniCardList
        endpoint="/products?limit=100"
        categoryInput={categoryInput}
        categorySelect={categorySelect}
      />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />
      <hr />
      <CardList
        title="Watches"
        endpoint="/products?limit=10&skip=60"
        setModalContext={setModalContext}
      />
      <Footer />
      {modalContext.isVisible && (
        <ProductDetail
          productData={modalContext.productData}
          setCartList={setCartList}
          setModalContext={setModalContext}
        />
      )}
      {isCartVisible && (
        <ModalCart
          setCartVisibility={setCartVisibility}
          cartList={cartList}
          setCartList={setCartList}
        />
      )}
    </div>
  );
}

export default App;
