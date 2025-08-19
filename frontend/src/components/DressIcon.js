import { BASE_URL } from "../baseUrl";

export default function DressIcon({ dress, onClick }) {
  return (
    <img
      src={`${BASE_URL}/outfits/${dress}`}
      alt={dress}
      className="dress-icon"
      onClick={onClick}
    />
  );
}
