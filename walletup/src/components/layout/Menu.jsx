import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <div className='logo'>Logo</div>
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
