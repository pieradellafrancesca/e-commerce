import { useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import "./index.css";

const CartItem = ({ cartData, setCartList }) => {
  const { id, thumbnail, title, price, quantity } = cartData;
  const [counter, setCounter] = useState(quantity);

  const cartListfromLS = JSON.parse(localStorage.getItem("cartList")) || [];

  const onHandleRemove = () => {
    const filteredData = cartListfromLS.filter((item) => item.id !== id);
    setCartList(() => filteredData);
    localStorage.setItem("cartList", JSON.stringify(filteredData));
  };

  // const onHandleRemove2 = () => {
  //   setCartList((prev) => [...prev.filter((item) => item.id !== id)]);
  // };

  const onHandleRemoveDuplicate = () => {
    const productExist = cartListfromLS.find((item) => item.id === id);

    setCartList(() => [
      ...cartListfromLS.map((item) =>
        item.id !== productExist.id
          ? item
          : {
              ...productExist,
              quantity:
                productExist.quantity > 1 ? productExist.quantity - 1 : 1,
            }
      ),
    ]);

    localStorage.setItem(
      "cartList",
      JSON.stringify([
        ...cartListfromLS.map((item) =>
          item.id === id
            ? {
                ...productExist,
                quantity:
                  productExist.quantity > 1 ? productExist.quantity - 1 : 1,
              }
            : item
        ),
      ])
    );
    setCounter((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const onHandleAddDuplicate = () => {
    const productExist = cartListfromLS.find((item) => item.id === id);

    setCartList(() => [
      ...cartListfromLS.map((item) =>
        item.id !== productExist.id
          ? item
          : { ...productExist, quantity: productExist.quantity + 1 }
      ),
      ,
    ]);

    localStorage.setItem(
      "cartList",
      JSON.stringify([
        ...cartListfromLS.map((item) =>
          item.id === id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        ),
      ])
    );
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="CartItem">
      <img className="CartItem__image" src={thumbnail} alt={title} />
      <p className="CartItem__title">{title}</p>
      <p className="CartItem__price">$ {price.toFixed(2)}</p>
      <div className="CartItem--counter">
        <button
          className="CartItem__first--btn"
          onClick={onHandleRemoveDuplicate}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          className="CartItem__second--btn"
          onClick={onHandleAddDuplicate}
        >
          +
        </button>
      </div>
      <TfiTrash className="CartItem--remove" onClick={onHandleRemove} />
    </div>
  );
};

export default CartItem;
