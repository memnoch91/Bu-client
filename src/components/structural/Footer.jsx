import React from 'react';
import { Link } from 'react-router-dom';

//assets
import logo from '../../assets/bu-logo.jpg';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container cm-footer'>
                <div className="footer-brand">
                    <Link to='/'>
                        <img className='d-block' src={logo} alt='navbar brand' width='128' height='128' />
                    </Link>
                </div>
                <nav role='navigation'  aria-label="footer navigation">
                    <ul className='plain-list'>
                        <li className='columns is-multiline is-marginless'>
                            <Link className='column is-3' to='/'>
                                HOME
                            </Link>
                            <Link className='column is-3' to='about us'>
                                POVESTEA
                            </Link>
                            <Link className='column is-3' to='products'>
                                PRODUSE
                            </Link>
                            <Link className='column is-3' to='products'>
                                Contactează-ne
                            </Link>
                            <div className='column is-1'>
                            <Link to='/prodfbucts'>
                                <i class="fab fa-facebook-square"></i>
                            </Link>
                            <Link to='/insta'>
                                <i class="fab fa-instagram"></i>
                            </Link>
                            <Link to='/email'>
                                <i class="fas fa-at"></i>
                            </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
