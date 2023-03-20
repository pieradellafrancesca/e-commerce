import { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import "./index.css";

const CartItem = ({ cartData, setCartList }) => {
  const { id, thumbnail, title, price } = cartData;
  // const [counter, setCounter] = useState(0);

  const onHandleRemove = () => {
    const cartListfromLS = JSON.parse(localStorage.getItem("cartList")) || [];
    const filteredData = cartListfromLS.filter((item) => item.id !== id);
    setCartList(() => filteredData);
    localStorage.setItem("cartList", JSON.stringify(filteredData));
  };

  // const onHandleRemove2 = () => {
  //   setCartList((prev) => [...prev.filter((item) => item.id !== id)]);
  // };

  return (
    <div className="CartItem">
      <img className="CartItem__image" src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>$ {price}</p>
      <div className="CartItem--counter">
        {/* <button className="CartItem__first--btn" onClick={() => {}}>
          -
        </button> */}
        {/* <p>0</p> */}
        {/* <button className="CartItem__second--btn" onClick={() => {}}>
          +
        </button> */}
      </div>

      <IoTrashBinOutline
        className="CartItem--remove"
        onClick={onHandleRemove}
      />
    </div>
  );
};

export default CartItem;
