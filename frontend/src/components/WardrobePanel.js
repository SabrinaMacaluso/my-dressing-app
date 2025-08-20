import { useState } from "react";
import AvailableClothes from "./AvailableClothes";
import "../WardrobePanel.css";

function WardrobePanel({ types, clothesByType, currentClothes, onHover, onLeave, onClick, onChangeLayer, onRemove, initialType }) {
  const [activeType, setActiveType] = useState(initialType || types[0]); // <- use initialType if given


  return (
    <div className="wardrobe-panel">
      {/* Left side: category buttons */}
      <div className="categories">
        {types.map((type) => (
          <button
            key={type}
            className={`category-button ${activeType === type ? "active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            <img src={`/icons/${type}.png`} alt={type} />
            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </button>
        ))}
      </div>

      {/* Right side: show clothes of the active category */}
      <div className="clothes-area">
        <AvailableClothes
          clothes={clothesByType[activeType] || []}
          category={activeType}
          currentClothes={currentClothes}
          onHover={onHover}
          onLeave={onLeave}
          onClick={onClick}
          onChangeLayer={onChangeLayer}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
}

export default WardrobePanel;
