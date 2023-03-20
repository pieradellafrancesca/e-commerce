import { BsCart4 } from "react-icons/bs";
import "./index.css";

const ProductDetail = ({ productData, setCartList, setModalContext }) => {
  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  // const onHandleAddCart = () => {
  //   const localStorageCartItems =
  //     JSON.parse(localStorage.getItem("cartList")) || [];

  //   const productExist = localStorageCartItems.find(
  //     (item) => item.id === productData.id
  //   ); // il prodotto esiste nella lista
  //   if (productExist) {
  //     // se esiste,
  //     setCartList(() => {
  //       localStorageCartItems.map(
  //         (item) =>
  //           item.id === productData.id
  //             ? { ...productExist, quantity: productExist.quantity + 1 } //troviamo l'elemento e lo aumentiamo di 1
  //             : item // se non esiste, aggiungiaamo il nuovo elemento al carrello
  //       );
  //     });
  //     localStorage.setItem(
  //       "cartList",
  //       JSON.stringify([...localStorageCartItems])
  //     );
  //   } else {
  //     //se il prodotto non esiste nel carrello
  //     setCartList(() => [
  //       ...localStorageCartItems,
  //       { ...productData, quantity: 1 },
  //     ]);
  //     localStorage.setItem(
  //       "cartList",
  //       JSON.stringify([
  //         ...localStorageCartItems,
  //         { ...productData, quantity: 1 },
  //       ])
  //     );
  //   }
  // };
  // setCartList((prev) => [...prev, productData]);
  // localStorage.setItem(
  //   "cartList",
  //   JSON.stringify([...localStorageCartItems, productData])
  // );
  // };

  const onHandleAddCart = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cartList")) || [];

    // evito di aggiungere lo stesso item:
    setCartList((prev) =>
      !!prev.find((item) => item.id === productData.id)
        ? [...prev]
        : [...prev, productData]
    );

    if (!localStorageCartItems.find((item) => item.id === productData.id)) {
      localStorage.setItem(
        "cartList",
        JSON.stringify([...localStorageCartItems, productData])
      );
      alert(`${productData.title} added to cart!`);
    } else {
      alert(`${productData.title} IS ALREADY IN THE CART!`);
    }
  };

  return (
    <div className="ProductDetail">
      <div className="ProductDetail__content">
        <h1>{productData.title}</h1>
        <p>{productData.description}</p>
        <div className="ProductDetail__text--info">
          <p className="ProductDetail__text--cat">{productData.category}</p>
          <p className="ProductDetail__text--price">$ {productData.price}</p>
        </div>
        <div className="ProductDetail__gallery">
          {productData.images.map((image) => (
            <img src={image} alt={image.title} key={image} />
          ))}
        </div>
        <BsCart4 onClick={onHandleAddCart} className="ProductDetail--cart" />
        <button onClick={onHandleClose} className="ProductDetail--close">
          x
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
