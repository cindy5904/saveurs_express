import NavBar from "../NavBar/NavBar";
import Logo from "../../assets/images/logo-saveurs-express.png";

import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <img
                className={classes.logo}
                src={Logo}
                alt="Logo Saveurs Express"
            />
            <NavBar />
        </header>
    );
}
export default Header;
