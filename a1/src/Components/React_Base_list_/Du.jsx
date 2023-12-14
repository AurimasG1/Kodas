export default function Du({kazkas}) {
    const randomColor = _ => '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');

    const color = randomColor()

    return (
        <div className="apskritimas" style={{backgroundColor: color }}>
            <span>{kazkas}</span>
            
        </div>
    )
}