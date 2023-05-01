import { BsCart2 } from "react-icons/bs";
import "./index.css";

const ProductDetail = ({ productData, setCartList, setModalContext }) => {
  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const onHandleAddCart = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    const productExist = localStorageCartItems.find(
      (item) => item.id === productData.id
    );
    // se il prodotto è già nella lista...
    if (productExist) {
      setCartList(() => [
        ...localStorageCartItems.filter((item) => item.id !== productExist.id),
        { ...productExist, quantity: productExist.quantity + 1 },
      ]);

      localStorage.setItem(
        "cartList",
        JSON.stringify([
          ...localStorageCartItems.map((item) =>
            item.id === productData.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : item
          ),
        ])
      );
    } else {
      // se il prodotto non è già nel lista...
      setCartList(() => [
        ...localStorageCartItems,
        { ...productData, quantity: 1 },
      ]);
      localStorage.setItem(
        "cartList",
        JSON.stringify([
          ...localStorageCartItems,
          { ...productData, quantity: 1 },
        ])
      );
    }
    console.log(
      JSON.parse(localStorage.getItem("cartList")),
      JSON.parse(localStorage.getItem("cartList")).length
    );
  };

  // const onHandleAddCart = () => {
  //   const localStorageCartItems =
  //     JSON.parse(localStorage.getItem("cartList")) || [];

  //   // evito di aggiungere lo stesso item:
  //   setCartList((prev) =>
  //     !!prev.find((item) => item.id === productData.id) // ovvero se l'id dell'item è già presente
  //       ? [...prev]
  //       : [...prev, productData]
  //   );

  //   if (!localStorageCartItems.find((item) => item.id === productData.id)) {
  //     localStorage.setItem(
  //       "cartList",
  //       JSON.stringify([...localStorageCartItems, productData])
  //     );
  //     alert(`${productData.title} added to cart!`);
  //   } else {
  //     alert(`${productData.title} IS ALREADY IN THE CART!`);
  //   }
  // };

  return (
    <div className="ProductDetail">
      <div className="ProductDetail__content">
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
        <div className="ProductDetail__gallery">
          {productData.images.map((image) => (
            <img src={image} alt={image.title} key={image} />
          ))}
        </div>
        <div className="ProductDetail__add-cart" onClick={onHandleAddCart}>
          <div className="ProductDetail__wrapper">
            <BsCart2 className="ProductDetail--cart" />
            <p>Add to cart</p>
          </div>
          <p className="ProductDetail__text--price">
            $ {productData.price.toFixed(2)}
          </p>
        </div>

        <button onClick={onHandleClose} className="ProductDetail--close">
          ✖
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
