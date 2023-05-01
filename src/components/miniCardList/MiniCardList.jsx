import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import MiniCard from "../miniCard/MiniCard";
import "./index.css";

const MiniCardList = ({ endpoint, categoryInput, categorySelect }) => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setMiniCards(() => data.products));
  }, []);

  const selectedData = miniCards.filter((card) =>
    !categorySelect || categorySelect === "Select"
      ? miniCards
      : card.category === categorySelect
  );

  // const filteredData = miniCards.filter((card) =>
  //   !categoryInput ? miniCards : card.category === categoryInput
  // );

  // CATEGORY: [
  // "smartphones",
  // "laptops",
  // "fragrances",
  // "skincare",
  // "groceries",
  // "home-decoration",
  // "furniture",
  // "tops",
  // "womens-dresses",
  // "womens-shoes",
  // "mens-shirts",
  // "mens-shoes",
  // "mens-watches",
  // "womens-watches",
  // "womens-bags",
  // "womens-jewellery",
  // "sunglasses",
  // "automotive",
  // "motorcycle",
  // "lighting"
  // ]

  return (
    <div className="MiniCardList">
      {selectedData.map((card) => (
        <MiniCard
          imgSrc={card.thumbnail}
          imgAlt={card.title}
          desc={card.title}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default MiniCardList;
