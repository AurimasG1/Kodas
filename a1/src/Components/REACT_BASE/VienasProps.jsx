export default function VienasProps({tekstas, randomColor}) {
    return (
        <>
        <h1 style={{color: randomColor()}}>{tekstas}</h1>  
        </>
    )
}