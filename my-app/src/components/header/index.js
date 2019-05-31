import React from 'react';
import './style.scss';
import logo from '../../images/logo-m3.png'

const Header = () => (
    <div id="header">
        <div className="container">
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo m3"/>
                </div>

                <div className="header__carrinho">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </div>
);

export default Header;

