import React, { useState, useEffect, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import iconShopingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToogleOrders] = useState(false);
    const { state } = useContext(AppContext);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width < 640 && menuOpen) {
            setMenuOpen(false);
        }else if(size.width > 640 && !menuOpen) {
            setMenuOpen(true);
        }
    }, [size.width]);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    
    return (
        <nav>
            <div className="Navbar__title">
                <img src={iconMenu} 
                    className="Navbar__title__icon__mobile" 
                    alt="menu" 
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <img src={logo} alt="logo" className="Navbar__title__logo" />
            </div>

            {menuOpen
                ? 
                    <div className="Navbar__container">
                        <div className="Navbar__container__title">CATEGORIES</div>
                        <ul className="Navbar__container__left">
                            <li>
                                <a href="/">All</a>
                            </li>
                            <li>
                                <a href="/">Clothes</a>
                            </li>
                            <li>
                                <a href="/">Electronics</a>
                            </li>
                            <li>
                                <a href="/">Furnitures</a>
                            </li>
                            <li>
                                <a href="/">Toys</a>
                            </li>
                            <li>
                                <a href="/">Others</a>
                            </li>
                        </ul> 

                        <ul className="Navbar__container__right">
                            <li className="navbar-email" onClick={handleToggle}>
                                <a href="#">platzi@example.com</a>
                            </li>
                            <li>
                                <a href="#" className="Navbar__container__sign" >Sign up</a>
                            </li>
                        </ul>
                    </div>
                : ''
            }

            <div className="navbar-shopping-cart" 
                    onClick={() => setToogleOrders(!toggleOrders)}
                >
                    <img src={iconShopingCart} alt="shopping cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </div>

            {toggle && <Menu />}
            {toggleOrders && <MyOrder setToogleOrders={setToogleOrders} toggleOrders={toggleOrders}/>}
        </nav>
    )
};

export default Header
