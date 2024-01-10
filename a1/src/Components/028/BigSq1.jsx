import randomColor from "../../Funkcijos/randomColor";

export default function BigSq1({ sq1, setSq2 }) {

    const change1 = _ => {
        setSq2(randomColor());
    }

    return (
        <div className="square big pointer" style={{
            backgroundColor: sq1 + '20',
            border: '1px solid ' + sq1
        }}
            onClick={change1}>
            <h1>This is BigSq 1</h1>
        </div>
    )
}