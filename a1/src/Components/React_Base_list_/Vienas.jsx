export default function Vienas({betKas}) {
    const randomColor = _ => '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');

    const color = randomColor()

    return (
        <div className="kvadratas" style={{backgroundColor: color }}>
            <span>{betKas}</span>
            
        </div>
    )
}