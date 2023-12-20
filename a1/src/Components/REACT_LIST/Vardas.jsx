export default function Vardas({ item }) {
    return (
      <div className="square">
        <p>ID: {item.id}</p>
        <p>Type: {item.type}</p>
        <p style={{color: item.color}}>Name: {item.name}</p>
        <p>Color: {item.color}</p>
      </div>
    );
  }