import { Link } from "react-router-dom"
import { FaStore } from 'react-icons/fa';

import "./Header.css"

const Header = () => {

  return (
    <header className="header">
        <div className="wrapper">
            <div className="logo">
                <FaStore />
                Buddy Shop
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="link">Cart</Link>
                    </li>
                    <li className="link counter">
                        total items: 0
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
export default Header


