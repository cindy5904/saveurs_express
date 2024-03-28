import { useSelector } from "react-redux";
import UserInfos from "../../components/UserInfos/UserInfos";
import classses from "./ProfilePage.module.css";

function ProfilePage() {
    const user = useSelector((state) => state.login.user);
    return (
        <article className={classses.profilePage}>
            <h1 className={classses.title}>Votre profil</h1>
            {user ? (
                <>
                    <UserInfos />
                    <h2>Votre restaurant :</h2>
                </>
            ) : (
                <p className={classses.text}>
                    Veuillez vous connecter pour voir votre profil
                </p>
            )}
        </article>
    );
}
export default ProfilePage;
