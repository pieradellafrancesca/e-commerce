import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { BsCart4 } from "react-icons/bs";
import "./index.css";

const Navbar = ({
  setCategoryInput,
  setCategorySelect,
  cartListLength,
  setCartVisibility,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [options, setOptions] = useState([]);

  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setCategoryInput(inputValue);
  };

  useEffect(() => {
    GET("/products/categories").then((data) => setOptions(() => data));
  }, []);

  // const onHandleSelectChange = (event) => setSelectValue(event.target.value);

  // const onHandleSelectSubmit = (event) => {
  //   event.preventDefault();
  //   setCategorySelect(selectValue);
  // };

  const onHandleOpenCart = () => setCartVisibility((prev) => !prev);

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={onHandleChange}
          placeholder="Search category..."
          required
        />
      </form>

      {/* <form onSubmit={onHandleSelectSubmit}>
        <select value={selectValue} onChange={onHandleSelectChange}>
          <option value="Select">Select</option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </form> */}

      <div className="Navbar__cart">
        <p className={`Navbar__cart--num ${!cartListLength ? "none" : ""}`}>
          {cartListLength}
        </p>
        <BsCart4 className="Navbar__cart--icon" onClick={onHandleOpenCart} />
      </div>
    </div>
  );
};

export default Navbar;
