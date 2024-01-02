export function Show({color, setDeleteData, setEdiData}) {
  return (
    <div className="showLine">
      <div
        style={{
          backgroundColor: color.color,
          width: color.size / 2 + 'px',
          height: color.size / 2 + 'px',
          textAlign: 'center',
        }}
      >
        Color
      </div>
      <div className="buttons">
        <button className="red" onClick={_ => setDeleteData(color)}>
          Delete
        </button>
        <button className="green" onClick={_ => setEdiData(color)}>
          Edit
        </button>
      </div>
    </div>
  );
}
