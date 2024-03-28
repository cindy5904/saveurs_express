import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="/">
                        Accueil
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="">
                        À propos
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="">
                        Contact
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink className={classes.link} to="/connexion">
                        Espace restaurateur
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
