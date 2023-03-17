import CartItem from "../cartItem/CartItem";
import "./index.css";

const ModalCart = ({ cartList, setCartVisibility, setCartList }) => {
  const onHandleClose = () => setCartVisibility(false);

  return (
    <div className="ModalCart">
      <div className="ModalCart__content">
        <h3 className="ModalCart__content--title">CART</h3>
        {!cartList.length ? (
          <h4>Add items...</h4>
        ) : (
          cartList.map((item) => (
            <CartItem cartData={item} setCartList={setCartList} key={item.id} />
          ))
        )}

        <button onClick={onHandleClose} className="ModalCart--close">
          x
        </button>
        <h3
          className={`ModalCart__content--total ${!cartList.length && "none"}`}
        >
          Total price: $ {cartList.reduce((acc, item) => acc + item.price, 0)}
        </h3>
      </div>
    </div>
  );
};

export default ModalCart;
