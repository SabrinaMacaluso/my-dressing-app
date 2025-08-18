function DressingPanel({ types, onSelectType, onReset }) {
  return (
    <div className="dressing-panel">
      {types.map(type => (
        <div key={type} style={{ marginBottom: "10px" }}>
          <button onClick={() => onSelectType(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
          
        </div>
      ))}
    </div>
  );
}

export default DressingPanel;
