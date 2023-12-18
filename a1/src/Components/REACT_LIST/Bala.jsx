import React from 'react';

export default function Bala({ masyvas }) {
  return (
    <div>
      <h2>Bala Component</h2>
      <ul>
        {
        masyvas.map(({ id, type, name, color }) => (
          <li key={id}>
            {`${type} - ${name} (${color})`}
          </li>
        ))
        }
      </ul>
    </div>
  );
}