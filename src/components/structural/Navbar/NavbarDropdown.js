import React from 'react';

import { Link } from 'react-router-dom';

// *** cm *** in the classes for the navbar below 'cm' stans for custom
function NavbarDropdown() {
    return (
        <div className='cm-nav-dropdown'>
            <Link className='cm-navbar-link'>
                Home
            </Link>
            <Link className='cm-navbar-link'>
                Produse
            </Link>
            <Link className='cm-navbar-link'>
                Povestea
            </Link>
            <Link className='cm-navbar-link'>
                Contactează-ne
            </Link>
            <Link className='cm-navbar-link'>
                social - media -  outs
            </Link>
        </div>

    )
}

export default NavbarDropdown
