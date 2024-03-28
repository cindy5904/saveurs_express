function SignUp() {
    return (
        <article>
            <form>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" required />
                <p>Adressse :</p>
                <label htmlFor="adresse">Numéro</label>
                <input type="text" id="adresse" name="adresse" required />
                <label htmlFor="rue">Rue</label>
                <input type="text" id="rue" name="rue" required />
                <label htmlFor="ville">Ville</label>
                <input type="text" id="ville" name="ville" required />
                <label htmlFor="codePostal">Code Postal</label>
                <input type="text" id="codePostal" name="codePostal" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </form>
        </article>
    );
}
export default SignUp;
