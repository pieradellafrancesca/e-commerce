import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import MiniCard from "../miniCard/MiniCard";
import "./index.css";

const MiniCardList = ({ endpoint, categoryInput }) => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setMiniCards(() => data.products));
  }, []);

  const filteredData = miniCards.filter((card) =>
    card.category.includes(categoryInput)
  );

  return (
    <div className="MiniCardList">
      {filteredData.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
