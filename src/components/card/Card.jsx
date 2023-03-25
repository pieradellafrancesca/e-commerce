import { shortDescription } from "../../utils/func";
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
      <div className="Card__text">
        <h4 className="Card__text--title">{productData.title}</h4>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <div className="Card__text--value">
          <p className="Card__text--discount">
            {productData.discountPercentage}%
          </p>
          <p className="Card__text--price">$ {productData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
