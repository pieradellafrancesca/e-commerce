import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { BsCart2 } from "react-icons/bs";
import "./index.css";

const Navbar = ({
  setCategoryInput,
  setCategorySelect,
  cartListLength,
  setCartVisibility,
}) => {
  // const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [options, setOptions] = useState([]);

  // const onHandleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const onHandleSubmit = (event) => {
  //   event.preventDefault();
  //   setCategoryInput(inputValue);
  // };

  useEffect(() => {
    GET("/products/categories").then((data) => setOptions(() => data));
  }, []);

  const onHandleSelectChange = (event) => setSelectValue(event.target.value);

  const onHandleSelectSubmit = (event) => {
    event.preventDefault();
    setCategorySelect(selectValue);
  };

  const onHandleOpenCart = () => setCartVisibility((prev) => !prev);

  return (
    <div className="Navbar">
      <img
        className="Navbar__logo"
        src="../../../ea-com-low-resolution-logo-white-on-transparent-background.png"
        alt="logo"
      />
      {/* <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul> */}
      {/* <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={onHandleChange}
          placeholder="Search category..."
          required
        />
      </form> */}

      <form onSubmit={onHandleSelectSubmit}>
        <select value={selectValue} onChange={onHandleSelectChange}>
          <option className="Navbar__select--select" value="Select">
            Select a category
          </option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <input className="Navbar__form--submit" type="submit" value="Search" />
      </form>

      <div className="Navbar__cart">
        <p className={`Navbar__cart--num ${!cartListLength ? "none" : ""}`}>
          {cartListLength}
        </p>
        <BsCart2 className="Navbar__cart--icon" onClick={onHandleOpenCart} />
      </div>
    </div>
  );
};

export default Navbar;
