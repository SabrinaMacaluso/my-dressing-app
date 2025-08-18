export default function ClothingIcon({ item, onHover, onClick }) {
  return (
    <img
      src={`http://localhost:5000/outfits/${item}`}
      alt={item}
      className="clothing-icon"
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    />
  );
}
