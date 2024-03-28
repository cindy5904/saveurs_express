import './style/LigneCommande.css'
const LigneCommande = () => {

    const color = 'livre'

    return (
        <button id='LigneCommande'>
            <div className={`LigneCommande-Etat ${color}`}></div>

            <div className="LigneCommande-Information">
                <p>Cmd : 123456789</p>
                <p>3 Articles</p>
                <p>25 €</p>
            </div>

        </button>
    )
}

export default LigneCommande