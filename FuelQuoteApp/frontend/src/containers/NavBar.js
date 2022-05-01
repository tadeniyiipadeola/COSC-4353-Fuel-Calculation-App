import React, { Fragment } from 'react';

const navbar = ({auth:  { isAuthenticated, loading}, logout}) => {
    const authlink = (
        <a className="navbar__top__auth__link" onClick = {logout} href='#!'>logout</a>
    );
    const guestLinks = (
        <Fragment>
            <link className='navbar__top__auth__link' top='/login'> Login</link>
            <link className='navbar__top__auth__link' top='/signup'> signup</link>
        </Fragment>

    );

    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                        <Link className='navbar__top__logo_link' to='/'>Calculations</Link>
                    </div>
                    <div className='navbar__top__auth'>
                        {!loading && (<Fragment> {isAuthenticated ? authLinks: guestLinks}</Fragment>)}
                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom_item'>
                        <NavLink className='navbar_bottom__item__link' exact to='/'> Home</NavLink> 
                    </li>
                    <li className='navbar__bottom_item'>
                        <NavLink className='navbar_bottom__item__link' exact to='/Calculation'> Calculation</NavLink> 
                    </li>
                    <li className='navbar__bottom_item'>
                        <NavLink className='navbar_bottom__item__link' exact to='/about'> about </NavLink> 
                    </li>
                    <li className='navbar__bottom_item'>
                        <NavLink className='navbar_bottom__item__link' exact to='/contact'> contact</NavLink> 
                    </li>
                </div>
            </nav>
        </Fragment>
    );
);
export default navbar