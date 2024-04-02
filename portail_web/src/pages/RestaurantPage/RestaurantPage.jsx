import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import FormMenu from "../../components/FormMenu/FormMenu";

function RestaurantPage() {
    const user = useSelector((state) => state.login.user);

    const { restaurantId } = useParams();

    const restaurant = useSelector((state) => state.restaurant.restaurant);

    console.log(restaurantId);

    console.log(restaurant);

    return (
        <article>
            {user ? (
                <>
                    {restaurant && <CardRestaurant restaurant={restaurant} />}

                    <FormMenu userId={user.id} restaurantId={restaurant.id} />
                </>
            ) : (
                <p>
                    Veuillez vous connecter pour voir les détails du restaurant
                </p>
            )}
        </article>
    );
}

export default RestaurantPage;
