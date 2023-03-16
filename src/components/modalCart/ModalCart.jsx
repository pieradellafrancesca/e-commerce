import CartItem from "../cartItem/CartItem";
import "./index.css";

const ModalCart = ({ cartList, setModalContext, setCartList }) => {
  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isCartVisible: false,
    }));
  return (
    <div className="ModalCart">
      <div className="ModalCart__content">
        {cartList.map((item) => (
          <CartItem cartData={item} setCartList={setCartList} key={item.id} />
        ))}
        <button onClick={onHandleClose} className="ModalCart--close">
          x
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
