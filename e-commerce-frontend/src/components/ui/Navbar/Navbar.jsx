import { Link } from "react-router-dom"
import "./Navbar.scss"
import { useDispatch } from "react-redux"
import { setLanguage } from "../../../store/slices/language/language"

const Navbar = ({header,language}) => {
  const dispatch = useDispatch()
  return (
    <header>
      <div className="header-top">
        <div></div>
        <p>{header.headerTop.p}</p>
          <select value={language} onChange={(e)=>dispatch(setLanguage(e.target.value))}>
            <option value="en">Englesh</option>
            <option value="ru">Русской</option>
            <option value="uz">Uzbek</option>
          </select>
      </div>
      <nav>
        <h1 className="nav-logo">{header?.navbar?.logo}</h1>
        <ul className="nav-links">
          <li>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Contact</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Sign Up</Link>
          </li>
        </ul>
        <div className="nav-right">
          <form className="nav-search">
            <input type="text" />
            <button type="submit"></button>
          </form>
          <button>like</button>
          <button>cart</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
