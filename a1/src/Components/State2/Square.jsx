export default function Square ({ kvadratas, didinti1 }) {

  return (
    <div className="square">
      <button onClick={didinti1}>+</button>
      <div className="count">{kvadratas}</div>
    </div>
  );
};
