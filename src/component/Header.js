import Logo from '../image/subnhanh.png';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        fetch("https://6172a88e61ed900017c409ba.mockapi.io/api/navbars")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return console.log(error);
    } else {
        return (
            <header className="header">
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="header__navbar">
                    <ul className="header__list">
                        <div className="header__navbar-close">
                            <input type="checkbox" id="btn__closeNavbar" />
                            <label htmlFor="btn__closeNavbar">
                                <FontAwesomeIcon icon={faTimes} />
                            </label>
                        </div>
                        {items.map(item => (
                            <li className="header__item" key={item.id}>
                                <a href="/#" className="header__link">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header__menu">
                    <input type="checkbox" id="menu__open" />
                    <label htmlFor="menu__open" onClick={() => setIsActive(!isActive)}>
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                </div>
            </header>
        )
    }
}