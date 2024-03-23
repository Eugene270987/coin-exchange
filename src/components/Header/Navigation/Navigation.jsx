import {paths} from "../../../common/url";
import NavigationItem from "../NavigationItem/NavigationItem";
function Navigation () {

    const pages = [
        {name: 'Про нас', path: paths.ABOUT},
        {name: 'Каталог монет', path: paths.COIN_CATALOGUE},
        {name: 'Каталог сувенірної продукції', path: paths.SOUVENIR_CATALOGUE},
        {name: 'Біржа', path: paths.EXCHANGE}
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list py-2 flex flex-wrap items-center justify-center gap-4">
                {pages.map((page, index) => (
                    <NavigationItem key={index} name={page.name} path={page.path}/>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;