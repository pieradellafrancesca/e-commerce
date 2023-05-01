import "./index.css";

const MiniCard = ({ imgSrc, imgAlt, desc }) => {
  const onHandleClick = () => window.open(imgSrc, "_blank");
  return (
    <div className="MiniCard">
      <img
        onClick={onHandleClick}
        className="MiniCard__img"
        src={imgSrc}
        alt={imgAlt}
      />
      <p className="MiniCard__desc">{desc}</p>
    </div>
  );
};

export default MiniCard;
