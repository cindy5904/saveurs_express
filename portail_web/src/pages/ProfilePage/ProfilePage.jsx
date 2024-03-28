import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { Navigate } from "react-router-dom";

import { getRestaurantByUser } from "../../components/Restaurant/sliceRestaurant";

import FormRestaurant from "../../components/Restaurant/FormRestaurant";
import UserInfos from "../../components/UserInfos/UserInfos";
import classses from "./ProfilePage.module.css";

function ProfilePage() {
    const user = useSelector((state) => state.login.user);
    const restaurant = useSelector((state) => state.restaurant.restaurant);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurantByUser(user.id));
    }, [user, dispatch]);

    return (
        <article className={classses.profilePage}>
            <h1 className={classses.title}>Votre profil</h1>

            {user ? (
                <>
                    <UserInfos />

                    {restaurant ? (
                        <div>
                            <h2>Votre restaurant :</h2>
                            <p>{restaurant.nom}</p>
                            <p>{restaurant.notation}</p>
                            <p>{restaurant.specialite}</p>
                            <img src={restaurant.image} alt={restaurant.nom} />
                            <p>{restaurant.numero}</p>
                            <p>{restaurant.rue}</p>
                            <p>{restaurant.ville}</p>
                            <p>{restaurant.codePostal}</p>
                        </div>
                    ) : (
                        <FormRestaurant userId={user.id} />
                    )}
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
