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
  // const [categorySelect, setCategorySelect] = useState("");
  const [cartList, setCartList] = useState([]);
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisible: false,
    isCartVisible: false,
  });

  return (
    <div className="App">
      <Navbar
        setCategoryInput={setCategoryInput}
        // setCategorySelect={setCategorySelect}
        cartListLength={cartList.length}
        setModalContext={setModalContext}
      />
      <Hero />
      <MiniCardList
        endpoint="/products?limit=100"
        categoryInput={categoryInput}
        // categorySelect={categorySelect}
      />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />
      <hr />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
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
      {modalContext.isCartVisible && (
        <ModalCart
          productData={modalContext.productData}
          setModalContext={setModalContext}
          cartList={cartList}
          setCartList={setCartList}
        />
      )}
    </div>
  );
}

export default App;
