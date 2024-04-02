import classes from "./CardRestaurant.module.css";

function CardRestaurant({ restaurant }) {
    console.log(restaurant);
    return (
        <section className={classes.section}>
            <p className={classes.nom}>{restaurant[0].nom}</p>
            <p className={classes.text}>
                Note moyenne : {restaurant[0].notation}
            </p>
            <p className={classes.text}>
                Spécialité : {restaurant[0].specialite}
            </p>
            <img
                className={classes.image}
                src={restaurant[0].image}
                alt={restaurant[0].nom}
            />
            {restaurant[0].Adresses.map((adresse) => (
                <p key={adresse.id} className={classes.text}>
                    {adresse.numero} {adresse.rue} {adresse.codePostal}{" "}
                    {adresse.ville}
                </p>
            ))}
        </section>
    );
}
export default CardRestaurant;
