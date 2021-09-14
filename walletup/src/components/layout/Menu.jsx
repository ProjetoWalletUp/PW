import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './WalletUpLogo.jpg'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <div className='logo'><Link to="/"><img src={logo} alt="logo" height="100" /></Link></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/conteudo01">Carteira</Link>
                </li>
                <li>
                    <Link to="/conteudo02">Sobre</Link>
                </li>
                <li>
                    <Link to="/conteudo03">Contate-nos</Link>
                </li>
                <li>
                    <Link to="/conteudo04">Login</Link>
                </li>
            </ul>
        </nav>

    </aside>
)
export default Menu
