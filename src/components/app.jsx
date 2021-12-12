import React from 'react';
import {withTranslate} from 'react-redux-multilingual'

// Custom Components
import HeaderOne from "./common/headers/header-one";
import FooterOne from "./common/footers/footer-one";


// ThemeSettings


function App(props) {
    return (
        <div>
            <HeaderOne logoName={'logo.png'}/>
            {props.children}
            <FooterOne logoName={'logo.png'}/>

            {/*<ThemeSettings />*/}

        </div>
    );
}

export default withTranslate(App);
