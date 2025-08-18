import { useState, useEffect } from "react";
import Doll from "./components/Doll";
import DressingPanel from "./components/DressingPanel";
import AvailableClothes from "./components/AvailableClothes";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [types] = useState(["dress", "hair", "shoes"]);
  const [selectedType, setSelectedType] = useState(null);
  const [clothes, setClothes] = useState([]);
  const [currentClothes, setCurrentClothes] = useState({});
  const [previewClothes, setPreviewClothes] = useState({});

  // Fetch clothes from backend when category changes
  useEffect(() => {
    if (!selectedType) return;
    fetch(`http://localhost:5000/api/outfits?type=${selectedType}`)
      .then((res) => res.json())
      .then((data) => setClothes(data))
      .catch(console.error);
  }, [selectedType]);

  // Download doll with outfits
  const downloadOutfit = () => {
    const dollElement = document.getElementById("doll-container");
    if (!dollElement) return;

    html2canvas(dollElement, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "my-outfit.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch(err => console.error("Failed to capture doll:", err));
  };

  return (
    <div className="main-layout">
      
      {/* Header & Menu */}
      <div className="header">
        <h1>My Dressing Website</h1>
        <div className="menu">
          <button className="menu-btn">Home</button>
          <button className="menu-btn">Dressing</button>
        </div>
      </div>

      <div className="app">
        {/* Left panel */}
        <DressingPanel types={types} onSelectType={setSelectedType} />

        {/* Center doll */}
        <Doll currentClothes={currentClothes} previewClothes={previewClothes} />

        {/* Right clothes panel */}
        {selectedType && (
          <AvailableClothes
            clothes={clothes}
            category={selectedType}
            onHover={(item) =>
              setPreviewClothes({ ...previewClothes, [selectedType]: item })
            }
            onLeave={() =>
              setPreviewClothes({ ...previewClothes, [selectedType]: null })
            }
            onClick={(item) =>
              setCurrentClothes({ ...currentClothes, [selectedType]: item })
            }
          />
        )}
      </div>

      {/* Download button */}
      <div style={{ marginTop: "20px" }}>
        <button className="download-btn" onClick={downloadOutfit}>
          Download Outfit
        </button>
      </div>
    </div>
  );
}

export default App;
