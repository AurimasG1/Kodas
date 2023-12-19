export default function Laivas({ item }) {
    return (
      <div className="square">
        <p>ID: {item.id}</p>
        <p>Type: {item.type}</p>
        <p>Name: {item.name}</p>
        <p>Color: {item.color}</p>
      </div>
    );
  }