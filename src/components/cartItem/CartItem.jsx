import "./index.css";

const CartItem = ({ cartData, setCartList }) => {
  const { id, thumbnail, title, price } = cartData;

  const onHandleRemove = () => {
    const cartListfromLS = JSON.parse(localStorage.getItem("cartList"));
    const filteredData = cartListfromLS.filter((item) => item.id !== id);
    setCartList(() => filteredData);
    localStorage.setItem("cartList", JSON.stringify(filteredData));
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
