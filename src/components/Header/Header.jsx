import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";

function Header () {
    return (
        <header className="py-6 bg-grey-bg-color">
            <Container>
                <div className="header-inner flex justify-between items-center">
                    <Logo></Logo>
                    <Navigation></Navigation>
                </div>
            </Container>
        </header>
    )
}

export default Header;