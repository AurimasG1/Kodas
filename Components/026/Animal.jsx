export default function Animal({animal}) {
  const randomColor = _ => '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');

  const color = randomColor()

  return (
    <div className="square" style={{backgroundColor: color + '70',
    borderColor: color,
  }}>
    <span className="square__animal">{animal}</span>

  </div>
  )

}