import { useRef } from "react";
import { useDispatch } from "react-redux";

import { createRestaurant } from "./sliceRestaurant";

import classes from "./FormRestaurant.module.css";

function FormRestaurant({ userId }) {
    const dispatch = useDispatch();

    const nomRef = useRef(null);
    const notationRef = useRef(null);
    const specialiteRef = useRef(null);
    const imgRef = useRef(null);
    const numeroRef = useRef(null);
    const rueRef = useRef(null);
    const villeRef = useRef(null);
    const codePostalRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRestaurant = {
            nom: nomRef.current.value,
            notation: notationRef.current.value,
            specialite: specialiteRef.current.value,
            image: imgRef.current.value,
            numero: numeroRef.current.value,
            rue: rueRef.current.value,
            ville: villeRef.current.value,
            codePostal: codePostalRef.current.value,
            userId,
        };

        dispatch(createRestaurant(newRestaurant));

        nomRef.current.value = "";
        notationRef.current.value = "";
        specialiteRef.current.value = "";
        numeroRef.current.value = "";
        rueRef.current.value = "";
        villeRef.current.value = "";
        codePostalRef.current.value = "";
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Créer votre restaurant</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                    <label htmlFor="nom" className={classes.label}>
                        Nom
                    </label>
                    <input
                        type="text"
                        id="nom"
                        required
                        ref={nomRef}
                        name="nom"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="notation" className={classes.label}>
                        Notation
                    </label>
                    <input
                        type="number"
                        id="notation"
                        required
                        ref={notationRef}
                        name="notation"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="specialite" className={classes.label}>
                        Spécialité
                    </label>
                    <input
                        type="text"
                        id="specialite"
                        required
                        ref={specialiteRef}
                        name="specialite"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="img" className={classes.label}>
                        Image
                    </label>
                    <input
                        type="url"
                        id="img"
                        required
                        ref={imgRef}
                        name="img"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="numero" className={classes.label}>
                        Numéro
                    </label>
                    <input
                        type="number"
                        id="numero"
                        required
                        ref={numeroRef}
                        name="numero"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="rue" className={classes.label}>
                        Rue
                    </label>
                    <input
                        type="text"
                        id="rue"
                        required
                        ref={rueRef}
                        name="rue"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="ville" className={classes.label}>
                        Ville
                    </label>
                    <input
                        type="text"
                        id="ville"
                        required
                        ref={villeRef}
                        name="ville"
                        className={classes.input}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="codePostal" className={classes.label}>
                        Code Postal
                    </label>
                    <input
                        type="number"
                        id="codePostal"
                        required
                        ref={codePostalRef}
                        name="codePostal"
                        className={classes.input}
                    />
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
}

export default FormRestaurant;
