import { useSelector } from "react-redux";
import classes from "./UserInfos.module.css";

function UserInfos() {
    const user = useSelector((state) => state.login.user);
    return (
        <section className={classes.section}>
            <h2 className={classes.title}>Vos informations</h2>
            <p className={classes.text}>Nom: {user.nom}</p>
            <p className={classes.text}>Prénom: {user.prenom}</p>
            <p className={classes.text}>Téléphone: {user.telephone}</p>
            <p className={classes.text}>Email: {user.email}</p>
            <p className={classes.text}>Adresse:</p>
            {user.adresse.map((adresse) => (
                <p key={adresse.id} className={classes.text}>
                    {adresse.numero} {adresse.rue} {adresse.codePostal}{" "}
                    {adresse.ville}
                </p>
            ))}
        </section>
    );
}
export default UserInfos;
