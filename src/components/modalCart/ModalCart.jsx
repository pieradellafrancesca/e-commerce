import CartItem from "../cartItem/CartItem";
import "./index.css";

const ModalCart = ({ cartList, setCartVisibility, setCartList }) => {
  const onHandleClose = () => setCartVisibility(() => false);

  return (
    <div className="ModalCart">
      <div className="ModalCart__content">
        <h3 className="ModalCart__content--title">CART</h3>
        {!cartList.length ? (
          <h4 className="ModalCart__content--note">Add items...</h4>
        ) : (
          cartList.map((item) => (
            <CartItem cartData={item} setCartList={setCartList} key={item.id} />
          ))
        )}

        <button onClick={onHandleClose} className="ModalCart--close">
          x
        </button>
        <h4
          className={`ModalCart__content--total ${!cartList.length && "none"}`}
        >
          <span>Total (USD):</span>
          <span>$ {cartList.reduce((acc, item) => acc + item.price, 0)}</span>
        </h4>
        <button
          className={`ModalCart__content--btn ${!cartList.length && "none"}`}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
