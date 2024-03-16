import Title from "../Title/Title";
import {NavLink} from "react-router-dom";
function Logo () {
    return (
        <NavLink to="/" className="logo flex items-center max-w-sm gap-x-2 text-4xl">
            <div>
                <img src="/images/logo.png" alt="exchange-logo"/>
            </div>
            <div className="logo-title">
                <Title  size={2}>
                    Українська Біржа Монет
                </Title>
            </div>
        </NavLink>
    )
}

export default Logo;