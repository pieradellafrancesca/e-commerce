import { shortDescription } from "../../utils/func";
import { HiStar } from "react-icons/hi";
import "./index.css";

const Card = ({ productData, setModalContext }) => {
  const onHandleClick = () =>
    setModalContext((prev) => ({
      ...prev,
      productData,
      isVisible: true,
    }));

  return (
    <div className="Card" onClick={onHandleClick}>
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__wrapper">
        <HiStar className="Card__star" />
        <p className="Card__rating">{productData.rating.toFixed(1)}</p>
      </div>

      <div className="Card__text">
        <div className="Card__text--firstline">
          {" "}
          <h4 className="Card__text--title">{productData.title}</h4>
          <p className="Card__text--price">${productData.price.toFixed(2)}</p>
        </div>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <div className="Card__text--value"></div>
      </div>
    </div>
  );
};

export default Card;
