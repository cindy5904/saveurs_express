import { useSelector } from "react-redux";
import "./userInfos.css";

function UserInfos() {
    const user = useSelector((state) => state.login.user);
    return (
        <section>
            <h2>Vos informations</h2>
            <p>Nom: {user.nom}</p>
            <p>Prénom: {user.prenom}</p>
            <p>Téléphone: {user.telephone}</p>
            <p>Email: {user.email}</p>
            <p>Adresse:</p>
            {user.adresse.map((adresse) => (
                <p key={adresse.id}>
                    {adresse.numero} {adresse.rue} {adresse.codePostal}{" "}
                    {adresse.ville}
                </p>
            ))}
        </section>
    );
}
export default UserInfos;
