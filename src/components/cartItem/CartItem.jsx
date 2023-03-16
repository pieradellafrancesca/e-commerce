import "./index.css";

const CartItem = ({ cartData, setCartList }) => {
  const { id, thumbnail, title, price } = cartData;
  const onHandleRemove = () => {
    setCartList((prev) => [...prev.filter((item) => item.id !== id)]);
  };
  return (
    <div className="CartItem">
      <img className="CartItem__image" src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>$ {price}</p>
      <button className="CartItem--remove" onClick={onHandleRemove}>
        x
      </button>
    </div>
  );
};

export default CartItem;
