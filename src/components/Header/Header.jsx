import React from 'react';
import style from './Header.module.scss';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/icons8-menu-48.png';
import Cart from '../../assets/basket.svg';
import { Link } from "react-router-dom";


const Header = () => {
    const navLinks = ['FAQ', 'Оплата и доставка', 'Возврат', 'Исследования', 'Личный кабинет', '8 (800) 600-09-90'];

    return (
        <div className={style.header}>
            <div className={style.headerDesktop}>
                <div className={style.logo}>
                    <Link to="/">
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className={style.nav}>
                    {
                        navLinks.map( (value, index) => (
                            <a className={style.navLink} key={index}>
                                {value}
                            </a>
                        ))
                    }
                </div>
                <div className={style.cart}>
                    <Link to="/Cart">
                        <img src={Cart} alt="Cart" />
                    </Link>
                </div>
            </div>
            <div className={style.headerMobile}>
                <div className={style.headerMobileNav}>
                    <img src={Burger} alt="Лого"/>
                </div>
                <div className={style.mobileLogo}>
                    <img src={Logo} alt="Лого"/>
                </div>
                <div className={style.cart}>
                    <img src={Cart} alt="Cart" />
                </div>
            </div>
        </div>
    )
};

export default Header;