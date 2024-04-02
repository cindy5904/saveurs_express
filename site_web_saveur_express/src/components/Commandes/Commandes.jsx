import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style/commandes.css";
import trash from "../../assets/images/svg/trash.svg";
import { removeMenu } from "../Global/globalSlice";

const Commandes = () => {

  const panier = useSelector((state) => state.global.panier);
  const dispatch = useDispatch();
  const livraison = 4;



  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const calculateTotal = (prix, quantity) => {
    return prix * quantity;
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeMenu({ id: itemId }));
  };

  const prixTotal = panier.reduce(
    (total, item) =>
      total +
      calculateTotal(
        parseFloat(item.prix.replace("€", "").replace(",", ".")),
        item.quantity
      ),
    0
  );
  const prixTotalLivraison = prixTotal + livraison;

  return (
    <div>
      <h2 className="title-panier">Contenu du panier</h2>
      {panier.length === 0 ? (
        <p className="panier-vide">Votre panier est vide.</p>
      ) : (
        <div className="commandes-container">
          <div className="panier-card-container">
            {panier.map((item, index) => (
              <div key={index} className="panier-card-menu">
                <div className="panier-image-container">
                  <img
                    className="panier-image"
                    src={item.image}
                    alt="image menu"
                  />
                </div>
                <div className="panier-content">
                  <h3>{item.nom}</h3>
                  <p>{item.description}</p>
                  <p className="prix-panier">{item.prix}€</p>
                </div>
                <div className="quantite-panier">
                  <input
                    type="number"
                    value={item.quantity}
                    className="number-panier"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                  <p className="total-panier">
                    {calculateTotal(
                      parseFloat(item.prix.replace("€", "").replace(",", ".")),
                      item.quantity
                    )}
                    €
                  </p>
                  <img
                    src={trash}
                    alt=""
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </div>
              </div>
            ))}
           
          </div>
          {panier.length !== 0 &&<div className="contenu-total">
            <div className="total-produit">
            <p className="prix-total">Produits: </p>
            <p>{prixTotal.toFixed(2)}€</p>
            </div>
            <div className="frais-livraison">
            <p className="livraison-panier">livraison: </p>
            <p>{livraison} €</p>
            </div>
              <hr />
              <div className="total-panier-livraison">
                <p className="text-total-panier">Total:</p>
                <p className="text-total-panier">{prixTotalLivraison.toFixed(2)} €</p>
              </div>
              <div className="btn-validate-container">
                <button className="btn-validate">Valider ma commande</button>
              </div>
  
                </div>}
        </div>
      )}
</div>
  );
};

export default Commandes;
