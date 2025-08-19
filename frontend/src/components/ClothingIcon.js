import { BASE_URL } from "../baseUrl";

export default function ClothingIcon({ item, onHover, onClick }) {
  return (
    <img
      src={`${BASE_URL}/outfits/${item}`}
      alt={item}
      className="clothing-icon"
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    />
  );
}
