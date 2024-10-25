import { Link } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <header>
      <div className="header-top"></div>
      <nav>
        <h1 className="nav-logo">Exclusive</h1>
        <ul className="nav-links">
            <li>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Contact</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Sign Up</Link>
            </li>
        </ul>
        <div className="nav-right"></div>
      </nav>
    </header>
  )
}

export default Navbar
