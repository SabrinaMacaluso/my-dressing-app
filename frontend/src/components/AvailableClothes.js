// src/components/AvailableClothes.js
function AvailableClothes({ clothes, category, onHover, onLeave, onClick, onChangeLayer, currentClothes }) {
  if (!Array.isArray(clothes)) return null;

  // Only the selected item in this category can change layer
  const selectedItem = currentClothes[category];

  return (
    <div className="available-clothes-container">
      {clothes.map((item, index) => (
        <div
          key={index}
          className="clothing-item"
          onMouseEnter={() => onHover(item)}
          onMouseLeave={() => onLeave()}
          onClick={() => onClick(item)}
        >
          <img src={item.image} alt={item.name} />

          {/* Layer buttons only for the selected item */}
          {selectedItem && selectedItem.id === item.id && (
            <div className="layer-buttons">
              <button onClick={() => onChangeLayer(item, 1)}>⬆️</button>
              <button onClick={() => onChangeLayer(item, -1)}>⬇️</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AvailableClothes;
