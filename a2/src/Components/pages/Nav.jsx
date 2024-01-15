import Link from './Link'

export default function Nav() {


    return (

        <nav className="nav-bar">
            <a className="navbar-brand" href="#home">Home Base</a>
            <div className="navbar-nav">
                <Link className="nav-link" href='#animals'>Animals</Link>
                <Link className="nav-link" href='#about'>About zoo</Link>
                <Link className="nav-link" href='#contact'>Contact</Link>
            </div>
        </nav>

    )
}