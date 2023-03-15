import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CardList from "./components/cardList";
import Footer from "./components/footer";

import "./App.css";

function App() {
  const [categoryInput, setCategoryInput] = useState("");

  console.log(categoryInput);

  return (
    <div className="App">
      <Navbar setCategoryInput={setCategoryInput} />
      <Hero />
      <MiniCardList
        endpoint="/products?limit=100"
        categoryInput={categoryInput}
      />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <hr />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
