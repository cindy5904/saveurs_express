import { useEffect } from 'react'
import './style/LigneCommande.css'
const LigneCommande = ({ id, dateCommande, status, prix, quantite, modal, menu }) => {


    function etat(etat) {
        switch (etat) {
            case "livrée":
                return 'livre'
            case "Annulé":
                return 'abandon'
            default:
                return 'encours'
        }
    }

    const newData = {
        id,
        dateCommande,
        menu,
        status: etat(status),
        prix,
        quantite,
    }
    const color = etat(status)

    return (
        <button id='LigneCommande' onClick={() => (modal({ open: true, data: newData }))}>
            <div className={`LigneCommande-Etat ${color}`}></div>

            <div className="LigneCommande-Information">
                <p>Cmd : {id}</p>
                <p>{quantite} Articles</p>
                <p>{prix} €</p>
            </div>

        </button>
    )
}

export default LigneCommande