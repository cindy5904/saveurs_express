import { useRef } from "react";
import { signUp } from "./sliceSignUp";
import { useDispatch } from "react-redux";
import classes from "./FormSignUp.module.css";

function FormSignUp() {
    const dispatch = useDispatch();

    const nomRef = useRef(null);
    const prenomRef = useRef(null);
    const rueRef = useRef(null);
    const numeroRef = useRef(null);
    const villeRef = useRef(null);
    const codeRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const motDePasseRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRestaurateur = {
            nom: nomRef.current.value,
            prenom: prenomRef.current.value,
            numero: numeroRef.current.value,
            rue: rueRef.current.value,
            ville: villeRef.current.value,
            codePostal: codeRef.current.value,
            telephone: phoneRef.current.value,
            email: emailRef.current.value,
            password: motDePasseRef.current.value,
            role: "restaurateur",
        };

        dispatch(signUp(newRestaurateur));

        nomRef.current.value = "";
        prenomRef.current.value = "";
        rueRef.current.value = "";
        numeroRef.current.value = "";
        villeRef.current.value = "";
        codeRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        motDePasseRef.current.value = "";
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Inscription</h2>
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
                    <label htmlFor="prenom" className={classes.label}>
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="prenom"
                        required
                        ref={prenomRef}
                        name="prenom"
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
                    <label htmlFor="numero" className={classes.label}>
                        Numéro
                    </label>
                    <input
                        type="text"
                        id="numero"
                        required
                        ref={numeroRef}
                        name="numero"
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
                    <label htmlFor="code" className={classes.label}>
                        Code postal
                    </label>
                    <input
                        type="text"
                        id="code"
                        required
                        ref={codeRef}
                        name="code"
                        className={classes.input}
                    />
                </div>

                <div className={classes.formGroup}>
                    <label htmlFor="phone" className={classes.label}>
                        Téléphone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        required
                        ref={phoneRef}
                        name="phone"
                        className={classes.input}
                    />
                </div>

                <div className={classes.formGroup}>
                    <label htmlFor="email" className={classes.label}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        ref={emailRef}
                        name="email"
                        className={classes.input}
                    />
                </div>

                <div className={classes.formGroup}>
                    <label htmlFor="motDePasse" className={classes.label}>
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="motDePasse"
                        required
                        ref={motDePasseRef}
                        name="motDePasse"
                        className={classes.input}
                    />
                </div>

                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}
export default FormSignUp;
