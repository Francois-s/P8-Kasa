import React from 'react';
import './header.css';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom

export default function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} className='logo' alt="Logo Kasa" />
            </h1>
            <nav className='nav'>
                <ul className='nav_ul'>
                    <li className='nav_elem'>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className='nav_elem'>
                        <Link to="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
