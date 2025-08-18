function AvailableClothes({ clothes, category, onHover, onLeave, onClick }) {
  if (!category) return <div>Select a category</div>;

  return (
    <div>
      <h3>Available {category}</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {clothes.map(item => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            width={60}
            style={{ cursor: "pointer", border: "1px solid black" }}
            onMouseEnter={() => onHover(item)}
            onMouseLeave={onLeave}
            onClick={() => onClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default AvailableClothes;
