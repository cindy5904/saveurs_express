import { useState } from 'react'
import LigneCommande from '../components/EspaceClient/LigneCommande'
import ModalCommande from '../components/EspaceClient/ModalCommande'
import Commandes from '../Data/commande.json'
import './style/EspaceClientPage.css'

const EspaceClientPage = () => {
    document.title = 'Saveur Express | Accueil'
    const [modalCommande, setModalCommande] = useState({
        data: {},
        open: false
    })

    return (
        <main id="EspaceClient">
            <ModalCommande open={modalCommande.open} data={modalCommande.data} height={100} close={(value) => {setModalCommande({...modalCommande, open:value.open, data:value.data})}} />
            <section className="EspaceClient-Header">
                <div className="EspaceClient-User-Logo">
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            clipRule="evenodd"
                            d="M75 60C83.5248 60 91.7005 56.8393 97.7284 51.2132C103.756 45.5871 107.143 37.9565 107.143 30C107.143 22.0435 103.756 14.4129 97.7284 8.7868C91.7005 3.16071 83.5248 0 75 0C66.4752 0 58.2995 3.16071 52.2716 8.7868C46.2436 14.4129 42.8571 22.0435 42.8571 30C42.8571 37.9565 46.2436 45.5871 52.2716 51.2132C58.2995 56.8393 66.4752 60 75 60ZM0 150C-1.46764e-07 140.807 1.93993 131.705 5.70904 123.212C9.47814 114.719 15.0026 107.003 21.967 100.503C28.9314 94.0024 37.1993 88.8463 46.2987 85.3284C55.3982 81.8106 65.1509 80 75 80C84.8491 80 94.6018 81.8106 103.701 85.3284C112.801 88.8463 121.069 94.0024 128.033 100.503C134.997 107.003 140.522 114.719 144.291 123.212C148.06 131.705 150 140.807 150 150H0Z" fill="#F5F5F5" />
                    </svg>
                </div>
                <div className="EspaceClient-User-Informations">
                    <div className="EspaceClient-User-Informations-Title">
                        <h2>Nom Prenom</h2>
                        <h3>Total de {Commandes.length} commandes</h3>
                    </div>
                    <div className="EspaceClient-User-Informations-Legend">
                        <div className="EspaceClient-User-Informations-Legend-element">
                            <div className="Rond livre"></div>
                            <p>Livrée</p>
                        </div>
                        <div className="EspaceClient-User-Informations-Legend-element">
                            <div className="Rond encours"></div>
                            <p>En cours</p>
                        </div>
                        <div className="EspaceClient-User-Informations-Legend-element">
                            <div className="Rond abandon"></div>
                            <p>Abandonner</p>
                        </div>
                    </div>
                </div>
                <div className="EspaceClient-User-Last">
                    <hgroup>
                        <h2>Commande en Cours:</h2>
                        <h3>CMD : 1213456789</h3>
                    </hgroup>
                    <div className="EspaceClient-User-Last-Etat">
                        Orange
                    </div>

                </div>
            </section>
            <section className="EspaceClient-AllCommande">
                {Commandes.map((commande, index) =>
                    <LigneCommande
                        key={index}
                        modal={(value) => setModalCommande({ ...modalCommande, open: value.open, data:value.data })}
                        open={modalCommande.open}
                        id={commande.id}
                        menu={commande.menu}
                        status={commande.status}
                        dateCommande={commande.dateCommande}
                        quantite={commande.quantite}
                        prix={commande.prix}
                    />
                )}
            </section>
        </main>
    )
}

export default EspaceClientPage