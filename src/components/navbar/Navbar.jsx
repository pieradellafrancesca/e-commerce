import { useState } from "react";
import "./index.css";

const Navbar = ({ setCategoryInput }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setCategoryInput(inputValue);
  };

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
    </div>
  );
};

export default Navbar;
