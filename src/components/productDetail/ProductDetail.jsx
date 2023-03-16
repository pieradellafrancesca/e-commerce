import { BsCart4 } from "react-icons/bs";
import "./index.css";

const ProductDetail = ({ productData, setCartList, setModalContext }) => {
  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const onHandleAddCart = () => {
    setCartList((prev) => [...prev, productData]);
  };

  return (
    <div className="ProductDetail">
      <div className="ProductDetail__content">
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
        <div className="ProductDetail__text--info">
          <span>{productData.category}</span>
          <span>$ {productData.price}</span>
        </div>
        <div className="ProductDetail__gallery">
          {productData.images.map((image) => (
            <img src={image} alt={image.title} key={image} />
          ))}
        </div>
        {/* <button onClick={onHandleAddCart} className="ProductDetail--cart">
          🛒
        </button> */}
        <BsCart4 onClick={onHandleAddCart} className="ProductDetail--cart" />
        <button onClick={onHandleClose} className="ProductDetail--close">
          x
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
