import "./style/CardRestaurant.css"

const CardRestaurant = ({ nom, notation, specialite, img }) => {
    return (
        <article id="CardRestaurant">
            <figure>
                <img src={img} alt="" />
            </figure>
            <cite>
                <p>{nom}</p>
            </cite>
        </article>
    )
}

export default CardRestaurant