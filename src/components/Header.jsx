import { Link } from "react-router-dom"
import { FaStore } from 'react-icons/fa';
import { useMyContext } from "../context/context";

import "./Header.css"

const Header = () => {
    const { state } = useMyContext();

  return (
    <header className="header">
        <div className="wrapper">
            <Link to="/" className="logo">
            <div className="logo">
                <FaStore />
                Buddy Shop
            </div>
            </Link>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="link">Cart</Link>
                    </li>
                    <li className="link counter">
                        total items: {state.length}
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
export default Header


