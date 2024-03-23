import {NavLink} from "react-router-dom";
import './NavigationItem.scss';
import {useState} from "react";

function NavigationItem ({ name, path }) {
    const [animationKey, setAnimationKey] = useState(0);

    const handleMouseLeave = () => {
        setAnimationKey(prevKey => prevKey + 1);
    }

    return (
        <li className="navbar-item">
            <NavLink
                className="navbar-item__link font-bold text-secondary-color hover:text-gold-color flex justify-between items-center gap-1"
                to={path} onMouseEnter={handleMouseLeave}>
                <div className="navbar-item__image" key={animationKey}>
                    <img className="w-10 h-10" src="/images/coinicon.jpg" alt="menu-icon"/>
                </div>
                <span>{name}</span>
            </NavLink>
        </li>
    )
}


export default NavigationItem;