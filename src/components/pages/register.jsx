import React, {useState, useEffect} from 'react';
import Breadcrumb from "../common/breadcrumb";
import {withTranslate} from "react-redux-multilingual";
import {connect} from "react-redux";
import axios from "axios";


const Register = (props) => {

    const {translate} = props;

    const [user, setUser] = useState({});

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rpassword, setRpassword] = useState("");
    const [tel, setTel] = useState("")
    const [addr, setAddr] = useState("")
    const [zip, setZip] = useState("")
    const [birthDate, setBirthDate] = useState("")

    const checkPasswordsMath = (e) => {
        return password.startsWith(e.target.value) && password.length === e.target.value.length;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            tel,
            addr,
            zip,
            birth_date: birthDate
        })
    }


    useEffect(()=>{
        console.log(user);
    }, [user])



    return (
        <div>
            <Breadcrumb title={'create_account'}/>
            {/*Regsiter section*/}
            <section className="register-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>{translate("create_account")}</h3>
                            <div className="theme-card">
                                <form className="theme-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label htmlFor="first_name">{translate("first_name")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="first_name"
                                                placeholder="Nom"
                                                value={firstName}
                                                onChange={(e)=>{setFirstName(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="last_name">{translate("last_name")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="last_name"
                                                placeholder="Prénom"
                                                value={lastName}
                                                onChange={(e)=>{setLastName(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label htmlFor="email">{translate("email")}</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e)=>{setEmail(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="tel">{translate("tel")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="tel"
                                                placeholder="Téléphone"
                                                value={tel}
                                                onChange={(e)=>{setTel(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label htmlFor="addr">{translate("addr")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="addr"
                                                placeholder="Adresse"
                                                value={addr}
                                                onChange={(e)=>{setAddr(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="zip">{translate("zip")}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                placeholder="Code Postal"
                                                value={zip}
                                                onChange={(e)=>{setZip(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className={"form-row"}>
                                        <div className="col-md-6">
                                            <label htmlFor="password">{translate("password")}</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="review"
                                                placeholder="Mot de passe"
                                                value={password}
                                                onChange={(e)=>{setPassword(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="rpassword">{translate("repeat_password")}</label>
                                            <input
                                                type="rpassword"
                                                className="form-control"
                                                id="review"
                                                placeholder="Répéter mot de passe"
                                                value={rpassword}
                                                onChange={(e)=>{setRpassword(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <label htmlFor="birth_date">{translate("birth_date")}</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="birth_date"
                                                placeholder="Date de naissance"
                                                value={birthDate}
                                                onChange={(e)=>{setBirthDate(e.target.value)}}
                                                required={true}
                                            />
                                        </div>
                                        <a className="btn btn-solid" onClick={handleSubmit}>{translate("create_account")}</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default withTranslate(Register);