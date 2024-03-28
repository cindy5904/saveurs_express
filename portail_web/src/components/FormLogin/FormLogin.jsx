import { useRef, useEffect } from "react";
import { login } from "./sliceLogin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./FormLogin.module.css";

function Form() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.login.user);
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const motDePasseRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                email: emailRef.current.value,
                password: motDePasseRef.current.value,
            }),
        );
        emailRef.current.value = "";
        motDePasseRef.current.value = "";
    };

    useEffect(() => {
        if (user) {
            navigate("/mon-compte");
        }
    }, [user, navigate]);

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Connexion</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
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
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
export default Form;
