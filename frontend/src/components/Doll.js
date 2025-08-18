function Doll({ currentClothes, previewClothes }) {
  const dollStyle = {
    position: "relative",
    width: "400px",
    height: "800px",
    border: "1px solid black",
    backgroundColor: "#f86aa0ff"
  };

  const imgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  };

  const types = Object.keys(currentClothes); // dynamically get all types

  return (
    <div id="doll-container" style={dollStyle}>
      <img src="/images/doll.png" alt="Doll" style={imgStyle} crossOrigin="anonymous" />
      
      {types.map((type) => {
        const item = previewClothes[type] || currentClothes[type]; // preview overrides current
        return item ? (
          <img key={type} src={item.image} alt={type} style={imgStyle} crossOrigin="anonymous" />
        ) : null;
      })}
    </div>
  );
}

export default Doll;
