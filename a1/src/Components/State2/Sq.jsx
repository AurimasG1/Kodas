export default function Sq({square}) {

    return (
        <div className="square spin" style={{
            backgroundColor: square + '20',
            border: '1px solid' + square
        }}></div>
    )
}