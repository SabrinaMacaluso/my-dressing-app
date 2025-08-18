import { useState, useEffect } from "react";
import Doll from "./components/Doll";
import DressingPanel from "./components/DressingPanel";
import AvailableClothes from "./components/AvailableClothes";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [types] = useState(["dress", "hair", "shoe", "pant", "skirt", "top"]);
  const [selectedType, setSelectedType] = useState(null);
  const [clothes, setClothes] = useState([]);
  const [currentClothes, setCurrentClothes] = useState({});
  const [previewClothes, setPreviewClothes] = useState({});

  // Keep a separate array for layer order
  const [layerOrder, setLayerOrder] = useState([]);

  // Fetch clothes for selected type
  useEffect(() => {
    if (!selectedType) return;
    fetch(`http://localhost:5000/api/outfits?type=${selectedType}`)
      .then((res) => res.json())
      .then((data) => setClothes(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, [selectedType]);

  // Handle clicking a clothing item
  const handleClickItem = (item) => {
    setCurrentClothes((prev) => {
      const newClothes = { ...prev, [selectedType]: item };

      // If it's a new item in the outfit, add type to layerOrder at the top
      setLayerOrder((prevOrder) => {
        if (!prevOrder.includes(selectedType)) {
          return [...prevOrder, selectedType];
        }
        return prevOrder;
      });

      return newClothes;
    });
  };

  // Handle moving layers up/down
  const handleChangeLayer = (item, direction) => {
    const index = layerOrder.indexOf(selectedType);
    if (index === -1) return;

    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= layerOrder.length) return;

    const newLayerOrder = [...layerOrder];
    [newLayerOrder[index], newLayerOrder[newIndex]] = [newLayerOrder[newIndex], newLayerOrder[index]];
    setLayerOrder(newLayerOrder);
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
      <div className="header">
        <h1>My Dressing Website</h1>
        <div className="menu">
          <button className="menu-btn">Home</button>
          <button className="menu-btn">Dressing</button>
        </div>
      </div>

      <div className="app">
        <DressingPanel types={types} onSelectType={setSelectedType} />

        <Doll currentClothes={currentClothes} layerOrder={layerOrder} />

        {selectedType && (
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
          />
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button className="download-button" onClick={downloadOutfit}>
          Download Outfit
        </button>
      </div>
    </div>
  );
}

export default App;
