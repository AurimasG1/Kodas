import { useContext } from "react";
import Nav from "./Nav";
import { ParameterContext } from './Layout'
import Link from "./Link";
import '../../buttons.scss'


export default function About() {

    const { params } = useContext(ParameterContext)

    return (

        <>
            <Nav />
            <main className="App-header">
                <h1>About</h1>
                <p style={{ textAlign: 'center' }}>Parameter 1 is {params}</p>
                <div className="buttons">
                    <Link className="green" href='#about/lape'>About Lape</Link>
                    <Link className="yellow" href='#about/bebras'>About Bebras</Link>
                    <Link className="yellow" href='#about/zuikis'>About Zuikis</Link>
                </div>
            </main>
        </>
    )
}