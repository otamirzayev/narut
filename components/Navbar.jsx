//rfce
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <div className="navabar">
        <h1>My anime web</h1>
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar