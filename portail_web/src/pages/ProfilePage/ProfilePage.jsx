import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

import { getRestaurantByUser } from "../../components/Restaurant/sliceRestaurant";

import FormRestaurant from "../../components/Restaurant/FormRestaurant";
import UserInfos from "../../components/UserInfos/UserInfos";
import classes from "./ProfilePage.module.css";

function ProfilePage() {
    // eslint-disable-next-line no-unused-vars
    const [restaurantAdded, setRestaurantAdded] = useState(false);

    const user = useSelector((state) => state.login.user);
    const restaurant = useSelector((state) => state.restaurant.restaurant);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurantByUser(user.id));
        if (restaurant) {
            setRestaurantAdded(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, restaurantAdded]);

    return (
        <article className={classes.profilePage}>
            <h1 className={classes.title}>Votre profil</h1>

            {user ? (
                <>
                    <UserInfos />

                    {restaurant ? (
                        <section className={classes.section}>
                            <h2 className={classes.subtitle}>Votre restaurant</h2>
                            <p className={classes.nom}>{restaurant.nom}</p>
                            <p className={classes.text}>
                                Note moyenne : {restaurant.notation}
                            </p>
                            <p className={classes.text}>
                                Spécialité : {restaurant.specialite}
                            </p>
                            <img
                                className={classes.image}
                                src={restaurant.image}
                                alt={restaurant.nom}
                            />
                            {user.adresse.map((adresse) => (
                                <p key={adresse.id} className={classes.text}>
                                    {adresse.numero} {adresse.rue}{" "}
                                    {adresse.codePostal} {adresse.ville}
                                </p>
                            ))}
                        </section>
                    ) : (
                        <FormRestaurant
                            userId={user.id}
                            onRestaurantAdded={() => setRestaurantAdded(true)}
                        />
                    )}
                </>
            ) : (
                <p className={classes.text}>
                    Veuillez vous connecter pour voir votre profil
                </p>
            )}
        </article>
    );
}
export default ProfilePage;
