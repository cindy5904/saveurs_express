import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
    return (
        <nav>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="/">
                        Accueil
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="/about">
                        À propos
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="/menu">
                        Espace restaurateur
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
