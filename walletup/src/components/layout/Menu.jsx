import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './WalletUpLogo.jpg'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <div className='logo'><Link to="/"><img src={logo} alt="logo" className="logo" height="40vh" /></Link></div>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/Carteira">CARTEIRA</Link>
                </li>
                <li>
                    <Link to="/Sobre">SOBRE</Link>
                </li>
                <li>
                    <Link to="/Login">LOGIN</Link>
                </li>
            </ul>
        </nav>

    </aside>
)
export default Menu
