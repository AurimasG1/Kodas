export default function DogCircle ({ name, length, index }) {
    
    const backgroundColor = length > 6 ? 'green' : 'red';
    const circleStyle = {
        background: backgroundColor
    }

        return (

    <div className="circle" style={circleStyle}>
        {index} {name} ({length} characters)
    </div>
    
    )
}
