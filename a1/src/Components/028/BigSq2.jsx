import randomColor from "../../Funkcijos/randomColor";

export default function BigSq2({ sq2, setSq1 }) {

    const change2 = _ => {
        setSq1(randomColor());
    }

    return (
        <div className="square big pointer" style={{
            backgroundColor: sq2 + '20',
            border: '1px solid ' + sq2
        }}
            onClick={change2}>
            <h1>This is BigSq 2</h1>
        </div>
    )
}