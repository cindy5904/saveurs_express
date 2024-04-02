import { useRef } from "react";
import { useDispatch } from "react-redux";

import { createMenu } from "../../components/FormMenu/sliceMenu";

import classes from "./FormMenu.module.css";

function FormMenu({ restaurantId, userId }) {
    const dispatch = useDispatch();

    const nomInputRef = useRef();
    const prixInputRef = useRef();
    const descriptionInputRef = useRef();

    const handleCreateMenu = (event) => {
        event.preventDefault();

        const nom = nomInputRef.current.value;
        const prix = prixInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const menu = {
            nom,
            prix,
            description,
            restaurantId,
            userId,
        };

        dispatch(createMenu(menu));
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Créer un menu</h2>
            <form className={classes.form} onSubmit={handleCreateMenu}>
                <div className={classes.formGroup}>
                    <label htmlFor="nom" className={classes.label}>
                        Nom
                    </label>
                    <input
                        type="text"
                        id="nom"
                        required
                        name="nom"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="image" className={classes.label}>
                        Image
                    </label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="prix" className={classes.label}>
                        Prix
                    </label>
                    <input
                        type="number"
                        id="prix"
                        required
                        name="prix"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="description" className={classes.label}>
                        Description
                    </label>
                    <textarea
                        id="description"
                        required
                        name="description"
                        className={classes.input}
                    />
                </div>
                <button className={classes.button} type="submit">
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default FormMenu;
