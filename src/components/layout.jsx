import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Header from './header';
import './layout.css';
// import Footer from './footer';
//import useSeo from '../hooks/use-seo';

const Layout = (props) => {

    //const { fallbackSeo: { title , description } } = useSeo();
    const title = "Azeta Seguros";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatem.";

    return (
        <>
            <Global 
                styles={css`
                    :root {
                        --white: white;
                        --bgHeader: #ECEEFF;
                        --blue: #3B4EFF;
                        --orange: #F76031;
                        --yellow: #FFF2CB;
                        --gray: #232323CC;
                        --fsz16: 1.2rem;
                        --fsz20: 1.5rem;
                        --fsz110: 7.5rem;
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        padding: 0;
                        margin: 0;
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 15px;
                        font-size: 1.5rem;
                        line-height: 1.5;
                        font-family: 'CircularStdCustom';
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>

            <Header />
            {props.children}
            {/* <Footer 
                title={title}
            /> */}
        </>
    );
}
 
export default Layout;