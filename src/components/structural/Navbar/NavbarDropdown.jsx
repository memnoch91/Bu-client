import React from 'react';

import { Link } from 'react-router-dom';

// *** cm *** in the classes for the navbar below 'cm' stans for custom
function NavbarDropdown() {
    return (
        <div className='cm-nav-dropdown drop'>
            <Link to='/'>
                HOME
            </Link>
            <Link to='/produse'>
                PRODUSE
            </Link>
            <Link to='/story'>
                POVESTEA
            </Link>
            <Link to='/contact'>
                Contactează-ne
            </Link>
            <Link to='/social'>
                FB - INSTA -  @
            </Link>
        </div>

    )
}

export default NavbarDropdown
