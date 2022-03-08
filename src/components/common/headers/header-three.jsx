import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {IntlActions} from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import {changeCurrency} from '../../../actions'
import {connect} from "react-redux";
import LogoImage from "./common/logo";
import {withTranslate} from "react-redux-multilingual";

class HeaderThree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    /*=====================
         Pre loader
         ==========================*/
         /*
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }
    */
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            } else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
    }

    openNav() {
        const openmyslide = document.getElementById("mySidenav");
        if (openmyslide) {
            openmyslide.classList.add('open-side')
        }
    }

    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

    load = () => {
        this.setState({isLoading: true});
        fetch().then(() => {
            // deal with data fetched
            this.setState({isLoading: false})
        })
    };

    render() {
        const {translate} = this.props;
        return (
            <div>
                <header id="sticky" className="sticky header-2 header-6">
                    {this.state.isLoading ? <Pace color="#27ae60"/> : null}
                    <div className="mobile-fix-option"/>
                    {/*Top Header Component*/}
                    {/*<TopBarDark/>*/}

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-menu border-section border-top-0">
                                    <div className="brand-logo layout2-logo">
                                        <LogoImage logo={this.props.logoName}/>
                                    </div>
                                    <div className="form-search-div">
                                        <form className="form_search" role="form">
                                            <button type="submit" name="nav-submit-button" className="btn-search">
                                                <i className="fa fa-search"/>
                                            </button>
                                            <input id="query search-autocomplete" type="search"
                                                   placeholder={"Que Cherchez-vous ?"}
                                                   className="nav-search nav-search-field" aria-expanded="true"/>
                                        </form>
                                    </div>
                                    <div className="menu-right pull-right">
                                        <div>
                                            <div className="icon-nav">
                                                <ul>
                                                    {/*
                                                    <li className="onhover-div mobile-search">
                                                        <div>
                                                            <img
                                                                src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`}
                                                                onClick={this.openSearch} className="img-fluid" alt=""/>
                                                            <i className="fa fa-users" onClick={this.openSearch}/>
                                                        </div>
                                                    </li>
                                                    <li className="onhover-div mobile-setting">
                                                        <div><img
                                                            src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`}
                                                            className="img-fluid" alt=""/>
                                                            <i className="fa fa-cog"/></div>
                                                        <div className="show-div setting">
                                                            <h6>language</h6>
                                                            <ul>
                                                                <li><a href={null}
                                                                       onClick={() => this.changeLanguage('en')}>English</a>
                                                                </li>
                                                                <li><a href={null}
                                                                       onClick={() => this.changeLanguage('fn')}>French</a>
                                                                </li>
                                                            </ul>
                                                            <h6>currency</h6>
                                                            <ul className="list-inline">
                                                                <li><a href={null}
                                                                       onClick={() => this.props.changeCurrency('€')}>euro</a>
                                                                </li>
                                                                <li><a href={null}
                                                                       onClick={() => this.props.changeCurrency('₹')}>rupees</a>
                                                                </li>
                                                                <li><a href={null}
                                                                       onClick={() => this.props.changeCurrency('£')}>pound</a>
                                                                </li>
                                                                <li><a href={null}
                                                                       onClick={() => this.props.changeCurrency('$')}>doller</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    */}
                                                    <li className={"onhover-div user-login"}>
                                                        <Link to="/pages/login" >Se Connecter</Link>
                                                        {/*<Link to="/pages/login" className="user-login-hidden fa fa-user-circle-o" />*/}
                                                    </li>
                                                    {/*Header Cart Component */}
                                                    <CartContainer/>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-nav-center">
                                    <NavBar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/*
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-lg-12"}>
                            <div className={"special-offers-banner"}>
                                <h1 className={"special-offers-banner-title"}>Préparez l'automne avec des trouvailles uniques</h1>
                                <ul className={"special-offers-banner-list"}>
                                    <li className={"special-offers-banner-list-element"}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt={"img.png"} className={"special-offers-banner-img"} />
                                        <span className={"special-offers-banner-desc"} >Cadeaux pour elle en promo</span>
                                    </li>
                                    <li className={"special-offers-banner-list-element"}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt={"img.png"} className={"special-offers-banner-img"} />
                                        <span className={"special-offers-banner-desc"} >Cadeaux pour lui en promo</span>
                                    </li>
                                    <li className={"special-offers-banner-list-element"}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt={"img.png"} className={"special-offers-banner-img"} />
                                        <span className={"special-offers-banner-desc"} >Cadeaux pour enfants en promo</span>
                                    </li>
                                    <li className={"special-offers-banner-list-element"}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt={"img.png"} className={"special-offers-banner-img"} />
                                        <span className={"special-offers-banner-desc"} >Cadeaux personalisés en promo</span>
                                    </li>
                                    <li className={"special-offers-banner-list-element"}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt={"img.png"} className={"special-offers-banner-img"} />
                                        <span className={"special-offers-banner-desc"} >Cadeaux pour la maison en promo</span>
                                    </li>
                                    <li className={"special-offers-banner-list-element"}>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/2.jpg`} alt={"img.png"} className={"special-offers-banner-img"} />
                                        <span className={"special-offers-banner-desc"} >Toutes les promo cyber week</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                */}

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputPassword1"
                                                       placeholder="Search a Product"/>
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i
                                                    className="fa fa-search"/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslate(connect(null, {changeCurrency})(HeaderThree));