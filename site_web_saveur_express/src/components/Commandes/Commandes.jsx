import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import "./style/commandes.css";

const Commandes = () => {
    const panier = useSelector(state => state.global.panier);

    return ( 
        <div className="commandes-container">
            <h2>Contenu du panier</h2>
            <ul>
                {panier.map((item, index) => (
                    <li key={index}>
                        {item.image}
                        {item.nom} - Quantité : {item.quantity} - {item.prix}
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Commandes;
