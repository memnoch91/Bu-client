import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//assets
import logo from '../../../assets/bu-logo.jpg';

//Components
import NavbarDropdown from './NavbarDropdown';


class Navbar extends Component {

    state = {
        burgerIsOpen: false,
        // showDropdown: false
    }

    handleOpenBurger = () => {
        const toggleBurgerIsOpen = this.state.burgerIsOpen ? false : true;

        this.setState({
            burgerIsOpen: toggleBurgerIsOpen
        })
    }
    // *** cm *** in the classes for the navbar below 'cm' stans for custom
    render() {
        const { burgerIsOpen } = this.state

        return (
            <Fragment>
                <nav className='cm-navbar' role='navigation' aria-label='main navigation'>
                    <div className='cm-navbar-brand'>
                        <Link to='/'>
                            <img className='d-block' src={logo} alt='navbar brand' width='128' height='128' />
                        </Link>
                    </div>
                    <ul className='cm-navbar-left plain-list'>
                        <li >
                            <Link to='/'>
                                HOME
                            </Link>
                        </li>
                        <li >
                            <Link to='products'>
                                PRODUSE
                            </Link>
                        </li>
                        <li >
                            <Link to='about us'>
                                POVESTEA
                            </Link>
                        </li>
                    </ul>
                    <ul className='cm-navbar-right plain-list'>
                        <li >
                            <Link to='/contact'>
                                Contactează-ne
                        </Link>
                        </li>
                        <li >
                            <Link to='/tbd'>
                                TBD
                        </Link>
                        </li>
                    </ul>
                    <div
                        className={burgerIsOpen ? 'cm-burger-menu open' : 'cm-burger-menu'}
                        onClick={this.handleOpenBurger}
                    >
                        <span className='cm-burger-bar top' key='t'></span>
                        <span className='cm-burger-bar middle' key='m'></span>
                        <span className='cm-burger-bar bottom' key='b'></span>
                    </div>
                </nav>
                <nav className="cm-dropdown-container">
                    <CSSTransition
                        in={burgerIsOpen}
                        timeout={400}
                        unmountOnExit
                        classNames='drop'
                    >
                        <NavbarDropdown />
                    </CSSTransition>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar
