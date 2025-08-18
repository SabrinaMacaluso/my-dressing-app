import "../AvailableClothes.css";

function AvailableClothes({ clothes, category, currentClothes, onHover, onLeave, onClick, onChangeLayer, onRemove }) {
  if (!Array.isArray(clothes)) return null;

  return (
    <div className="available-clothes-container">
      <div className="available-clothes-header">
  <h3>{category}</h3>
  {currentClothes[category] && (
    <button onClick={() => onRemove(category)}>Remove</button>
  )}
</div>

      {clothes.map((item) => (
        <div
          key={item.id}
          className={`clothing-item ${currentClothes[category]?.id === item.id ? "selected" : ""}`}
          onMouseEnter={() => onHover(item)}
          onMouseLeave={() => onLeave()}
          onClick={() => onClick(item)}
        >
          <img src={item.image} alt={item.name} />
          {item.zIndex !== undefined && (
            <div className="layer-buttons">
              <button onClick={(e) => { e.stopPropagation(); onChangeLayer(category, 1); }}>⬆️</button>
              <button onClick={(e) => { e.stopPropagation(); onChangeLayer(category, -1); }}>⬇️</button>
            </div>
          )}
          <div className="item-name">{item.name}</div>

          <div className="available-clothes-header">


</div>
        </div>
      ))}
    </div>
  );
}

export default AvailableClothes;
