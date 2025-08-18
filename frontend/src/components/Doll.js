function Doll({ currentClothes, layerOrder }) {
  const dollStyle = {
    position: "relative",
    width: "400px",
    height: "800px",
    border: "1px solid black",
    backgroundColor: "#f86aa0ff",
  };

  const imgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div id="doll-container" style={dollStyle}>
      {/* Base doll */}
      <img
        src="/images/doll.png"
        alt="Doll"
        style={imgStyle}
        crossOrigin="anonymous"
      />

      {/* Render clothes based on layerOrder */}
      {layerOrder.map((type, i) => {
        const item = currentClothes[type];
        if (!item) return null;
        return (
          <img
            key={type}
            src={item.image}
            alt={type}
            style={{ ...imgStyle, zIndex: i + 1 }}
            crossOrigin="anonymous"
          />
        );
      })}
    </div>
  );
}

export default Doll;
