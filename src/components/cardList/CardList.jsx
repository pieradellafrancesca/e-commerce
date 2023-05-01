import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./index.css";

const CardList = ({ title, endpoint, setModalContext }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductList(() => data.products));
  }, []);

  const refScroll = useRef(null);
  const prev = () => {
    refScroll.current.scrollLeft = refScroll.current.scrollLeft - 750;
  };

  const next = () => {
    refScroll.current.scrollLeft = refScroll.current.scrollLeft + 750;
  };

  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div ref={refScroll} className="CardList__list">
        <button className="CardList__left" onClick={prev}>
          <AiOutlineLeft className="CardList__icon" />
        </button>
        {productList.length ? (
          productList.map((product) => (
            <Card
              productData={product}
              key={product.id}
              setModalContext={setModalContext}
            />
          ))
        ) : (
          <SpinnerLoading />
        )}
        <button className="CardList__right" onClick={next}>
          <AiOutlineRight className="CardList__icon" />
        </button>
      </div>
    </div>
  );
};

export default CardList;
