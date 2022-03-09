import React from 'react';
//import Breadcrumb from "../common/breadcrumb";
//import {connect} from "react-redux";
//import axios from "axios";
import { Formik, Form, Field } from "formik";
import { signupSchema } from '../../validation/signupSchema';


const Register = (props) => {

    return (
        <div>
            <section className="register-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Créer un Compte</h3>
                            <div className="theme-card">
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        password: "",
                                        rpassword: "",
                                        tel: "",
                                        addr: "",
                                        zip: "",
                                        birthdate: ""
                                    }}

                                    validationSchema={signupSchema}

                                    onSubmit={values => {
                                        console.log(values);
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="theme-form">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="first_name">Nom</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${errors.firstName && touched.firstName ? " is-invalid":""}`}
                                                        id="first_name"
                                                        placeholder="Nom"
                                                        name="firstName"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.firstName && touched.firstName ? (
                                                        <div className={"invalid-feedback"}>{errors.firstName}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="last_name">Prénom</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${errors.lastName && touched.lastName ? " is-invalid":""}`}
                                                        id="last_name"
                                                        placeholder="Prénom"
                                                        name="lastName"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.lastName && touched.lastName ? (
                                                        <div className={"invalid-feedback"}>{errors.lastName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="email">E-mail</label>
                                                    <Field
                                                        type="email"
                                                        className={`form-control${errors.email && touched.email ? " is-invalid":""}`}
                                                        id="email"
                                                        placeholder="Email"
                                                        name="email"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <div className={"invalid-feedback"}>{errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="tel">Téléphone</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${errors.tel && touched.tel ? " is-invalid":""}`}
                                                        id="tel"
                                                        placeholder="Téléphone"
                                                        name="tel"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.tel && touched.tel ? (
                                                        <div className={"invalid-feedback"}>{errors.tel}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="addr">Addresse</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${errors.addr && touched.addr ? " is-invalid":""}`}
                                                        id="addr"
                                                        placeholder="Adresse"
                                                        name="addr"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.addr && touched.addr ? (
                                                        <div className={"invalid-feedback"}>{errors.addr}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="zip">Code Postal</label>
                                                    <Field
                                                        type="text"
                                                        className={`form-control${errors.zip && touched.zip ? " is-invalid":""}`}
                                                        id="zip"
                                                        placeholder="Code Postal"
                                                        name="zip"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.zip && touched.zip ? (
                                                        <div className={"invalid-feedback"}>{errors.zip}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className={"form-row"}>
                                                <div className="col-md-6">
                                                    <label htmlFor="password">Mot de passe</label>
                                                    <Field
                                                        type="password"
                                                        className={`form-control${errors.password && touched.password ? " is-invalid":""}`}
                                                        id="review"
                                                        placeholder="Mot de passe"
                                                        name="password"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.password && touched.password ? (
                                                        <div className={"invalid-feedback"}>{errors.password}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="rpassword">Répéter mot de passe</label>
                                                    <Field
                                                        type="rpassword"
                                                        className={`form-control${errors.rpassword && touched.rpassword ? " is-invalid":""}`}
                                                        id="review"
                                                        placeholder="Répéter mot de passe"
                                                        name="rpassword"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.rpassword && touched.rpassword ? (
                                                        <div className={"invalid-feedback"}>{errors.rpassword}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <label htmlFor="birth_date">Date de naissance</label>
                                                    <Field
                                                        type="date"
                                                        className={`form-control${errors.birthdate && touched.birthdate ? " is-invalid":""}`}
                                                        id="birth_date"
                                                        placeholder="Date de naissance"
                                                        name="birthdate"
                                                        autoComplete={"off"}
                                                    />
                                                    {errors.birthdate && touched.birthdate ? (
                                                        <div className={"invalid-feedback"}>{errors.birthdate}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='form-row'>
                                                <button type="submit" className="btn btn-solid">Créer un compte</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register;