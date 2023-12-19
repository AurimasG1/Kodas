import { useEffect } from "react";

export default function Sq({square, setSquares}) {

    useEffect(_ => {
        // console.log(`Square is born ` + square.id)
        return _ => console.log(`Square are dead ` + square.id)
    }, [square.id]);

    const remove = _ => {
        // setSquares(item => item.filter(item => item.id !== square.id))
        setSquares(item => item.map(item => item.id === square.id ? {...item, show: false} : item))
    }
    return (
        <div className="square spin pointer" style={{
            backgroundColor: square.color + '66',
            border: '1px solid ' + square.color,
        }}
        onClick={remove}
        >{square.id}</div>
    )
}