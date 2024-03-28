import { useEffect } from "react"
import "./style/ModalCommande.css"
import MenuCard from "../menu/MenuCard"

const ModalCommande = ({ open, close, data }) => {


    if (open) {
        return (
            <section id="ModalCommande">
                <section className="Modal">
                    <div className="Modal-Header">
                        <h3>CMD N° {data.id}</h3>
                        <div className="Modal-Header-Left">
                            <h3>{data.prix} €</h3>
                            <button onClick={() => (close({ open: !open, data: [] }))}>X</button>
                        </div>
                    </div>
                    <div className="Modal-Body">
                        {data.menu.map((menus, index)=><MenuCard key={index} data={menus} view={true} />)}
                    </div>
                </section>
            </section>
        )
    }
}

export default ModalCommande