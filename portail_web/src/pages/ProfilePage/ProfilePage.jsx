import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

import { getRestaurantByUser } from "../../components/FormRestaurant/sliceRestaurant";

import FormRestaurant from "../../components/FormRestaurant/FormRestaurant";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
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
                        <>
                            <CardRestaurant restaurant={restaurant} />
                            <Link to={`/restaurant/${restaurant.id}`}>
                                Voir le restaurant
                            </Link>
                        </>
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
