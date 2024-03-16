import {NavLink} from "react-router-dom";
import styles from './NavigationItem.module.scss';
import {useState} from "react";

function NavigationItem ({ name, path }) {
    const [animationKey, setAnimationKey] = useState(0);

    const handleMouseLeave = () => {
        setAnimationKey(prevKey => prevKey + 1);
    }

    return (
        <li className="navbar-item">
            <NavLink className={`${styles.navLink} flex items-center justify-center gap-1 text-secondary-color hover:text-gold-color`} to={path} onMouseLeave={handleMouseLeave}>
                <div className={`${styles.content}`} key={animationKey}>
                    <img className="w-10 h-10" src="/images/coinicon.jpg" alt="menu-icon"/>
                </div>
                <div className="font-bold text-2xl">{name}</div>
            </NavLink>
        </li>
    )
}


export default NavigationItem;