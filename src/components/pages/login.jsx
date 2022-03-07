import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import { Formik, Form, Field } from "formik";
import { signinSchema } from "../../validation/signinSchema";

export default function Login() {

    return (
        <div>
            {/*<Breadcrumb title={"Login"} />*/}

            {/*Login section*/}
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Formik
                                    initialValues={{
                                        email: "",
                                        password: ""
                                    }}
                                    validationSchema={signinSchema}
                                    onSubmit = { values => {
                                        console.log(values);
                                    }}
                                >
                                    {({errors, touched}) => (
                                    <Form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="text"
                                                className={`form-control${errors.email && touched.email ? " is-invalid":""}`}
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="invalid-feedback">{errors.email}</div>
                                            ) : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <Field
                                                type="password"
                                                className={`form-control${errors.password && touched.password ? " is-invalid":""}`}
                                                id="password"
                                                name="password"
                                                placeholder="Enter your password"
                                            />
                                            {errors.password && touched.password ? (
                                                <div className="invalid-feedback">{errors.password}</div>
                                            ) : null}
                                        </div>
                                        <button type="submit" className="btn btn-solid">Login</button>
                                        {/*<a href="#" className="btn btn-solid">
                                            Login
                                        </a>*/}
                                    </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>
                                    Sign up for a free account at our store. Registration is
                                    quick and easy. It allows you to be able to order from our
                                    shop. To start shopping click register.
                                </p>
                                <Link to="/pages/register" className="btn btn-solid">
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
