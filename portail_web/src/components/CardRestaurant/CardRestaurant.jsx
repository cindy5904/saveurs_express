import classes from "./CardRestaurant.module.css";

function CardRestaurant({ restaurant }) {
    return (
        <section className={classes.section}>
            <p className={classes.nom}>{restaurant.nom}</p>
            <p className={classes.text}>Note moyenne : {restaurant.notation}</p>
            <p className={classes.text}>Spécialité : {restaurant.specialite}</p>
            <img
                className={classes.image}
                src={restaurant.image}
                alt={restaurant.nom}
            />
            {restaurant.Adresses.map((adresse) => (
                <p key={adresse.id} className={classes.text}>
                    {adresse.numero} {adresse.rue} {adresse.codePostal}{" "}
                    {adresse.ville}
                </p>
            ))}
        </section>
    );
}
export default CardRestaurant;
