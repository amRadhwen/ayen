import * as yup from "yup";


export const signinSchema = yup.object().shape({
    email: yup.string().email("L'adresse E-mail doit etre valide").required("E-mail requis"),
    password: yup.string().required("Mot de passe requis").min(6, "Mot de passe très court")

});