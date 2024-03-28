import { useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormSignUp from "../../components/FormSignUp/FormSignUp";

import classes from "./LoginPage.module.css";

function LoginPage() {
    const [isUser, setIsUser] = useState(false);
    return (
        <article>
            {!isUser ? (
                <>
                    <FormLogin />
                    <div className={classes.action}>
                        <p className={classes.text}>
                            Vous n'avez pas de compte ?
                        </p>
                        <button
                            className={classes.button}
                            onClick={() => setIsUser(true)}
                        >
                            Créer un compte
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <FormSignUp />
                    <div className={classes.action}>
                        <p className={classes.text}>
                            Vous avez déjà un compte ?
                        </p>
                        <button
                            className={classes.button}
                            onClick={() => setIsUser(false)}
                        >
                            Se connecter
                        </button>
                    </div>
                </>
            )}
        </article>
    );
}
export default LoginPage;
