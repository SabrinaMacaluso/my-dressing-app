// srcdevelop/pages/Dressing.js
import { useState, useEffect } from "react";
import Doll from "../components/Doll";
import DressingPanel from "../components/DressingPanel";
import AvailableClothes from "../components/AvailableClothes";
import html2canvas from "html2canvas";
import { BASE_URL } from "../baseUrl";
import "../App.css";

function Dressing() {
  const [types] = useState(["dress", "hair", "shoe", "pant", "skirt", "top"]);
  const [selectedType, setSelectedType] = useState(null);
  const [clothes, setClothes] = useState([]);
  const [currentClothes, setCurrentClothes] = useState({});
  const [previewClothes, setPreviewClothes] = useState({});
  const [layerOrder, setLayerOrder] = useState([]);

  useEffect(() => {
    if (!selectedType) return;
    fetch(`${BASE_URL}/api/outfits?type=${selectedType}`)
      .then((res) => res.json())
      .then((data) => setClothes(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, [selectedType]);

  const handleClickItem = (item) => {
    setCurrentClothes((prev) => {
      const newClothes = { ...prev, [selectedType]: item };
      setLayerOrder((prevOrder) => {
        if (!prevOrder.includes(selectedType)) return [...prevOrder, selectedType];
        return prevOrder;
      });
      return newClothes;
    });
  };

  const handleChangeLayer = (item, direction) => {
    const index = layerOrder.indexOf(selectedType);
    if (index === -1) return;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= layerOrder.length) return;
    const newLayerOrder = [...layerOrder];
    [newLayerOrder[index], newLayerOrder[newIndex]] = [newLayerOrder[newIndex], newLayerOrder[index]];
    setLayerOrder(newLayerOrder);
  };

  const handleRemoveCloth = (category) => {
    setCurrentClothes((prev) => ({ ...prev, [category]: null }));
  };

  const downloadOutfit = () => {
    const dollElement = document.getElementById("doll-container");
    if (!dollElement) return;

    html2canvas(dollElement, { useCORS: true })
      .then((canvas) => {
        const link = document.createElement("a");
        link.download = "my-outfit.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      })
      .catch((err) => console.error("Failed to capture doll:", err));
  };

  return (
    <div className="main-layout">
      <div className="dressing-app">
        <div className="doll-wrapper">
          <Doll currentClothes={currentClothes} layerOrder={layerOrder} />
          <button className="download-button" onClick={downloadOutfit}>
            Save Outfit
          </button>
        </div>

        {/* Sidebar with flex layout */}
        <div className="clothes-sidebar">
          <div className="sidebar-inner">
            {/* Left: Category Buttons */}
            <div className="category-buttons">
              {types.map((type) => (
                <button
                  key={type}
                  className={`category-button ${selectedType === type ? "active" : ""}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Right: Available Clothes */}
            {selectedType && (
              <div className="available-clothes-wrapper">
                <AvailableClothes
                  clothes={clothes}
                  category={selectedType}
                  currentClothes={currentClothes}
                  onHover={(item) =>
                    setPreviewClothes({ ...previewClothes, [selectedType]: item })
                  }
                  onLeave={() =>
                    setPreviewClothes({ ...previewClothes, [selectedType]: null })
                  }
                  onClick={handleClickItem}
                  onChangeLayer={handleChangeLayer}
                  onRemove={handleRemoveCloth}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dressing;
