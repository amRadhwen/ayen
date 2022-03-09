import * as yup from "yup";


export const signinSchema = yup.object().shape({
    email: yup.string().email("Adresse email invalide.").required("Addresse email requise."),
    password: yup.string().required("Mot de passe requis.")

});