export default function DressIcon({ dress, onClick }) {
  return (
    <img
      src={`http://localhost:5000/outfits/${dress}`}
      alt={dress}
      className="dress-icon"
      onClick={onClick}
    />
  );
}