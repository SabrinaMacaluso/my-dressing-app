

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

  return (
<div id="doll-container" style={dollStyle}>
  <img src="/images/doll.png" alt="Doll" style={imgStyle} crossOrigin="anonymous" />

 {currentClothes['dress'] && (
  <img 
    src={currentClothes['dress'].image} 
    alt="" 
    style={imgStyle} 
    crossOrigin="anonymous" 
  />
)}
  {currentClothes['hat'] && (
    <img src={currentClothes['hat'].image} alt="" style={imgStyle} crossOrigin="anonymous" />
  )}
  {currentClothes['hair'] && (
    <img src={currentClothes['hair'].image} alt="" style={imgStyle} crossOrigin="anonymous" />
  )}
  {currentClothes['shoes'] && (
    <img src={currentClothes['shoes'].image} alt="" style={imgStyle} crossOrigin="anonymous" />
  )}
</div>

  );
}


export default Doll;
