import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Header from './header';
import './layout.css';
import Footer from './footer/footer';
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
                        --white80: #ffffffcc;
                        --bgHeader: #eceeff;
                        --bgHeaderDrak: #e1e2f0;
                        --blue: #3B4EFF;
                        --orange: #F76031;
                        --orange80: #f75f31cc;
                        --yellow: #FFF2CB;
                        --gray: #232323;
                        --gray80: #232323CC;
                        --grayWhite: #2E2E2E;
                        --grayWhite15: #2E2E2E26;
                        --grayWhite80: #2E2E2ECC;
                        --grayShadow: #00000029;
                        --fsz14: 1.1rem;
                        --fsz16: 1.2rem;
                        --fsz17: 1.3rem;
                        --fsz18: 1.4rem;
                        --fsz19: 1.5rem;
                        --fsz20: 1.6rem;
                        --fsz25: 1.75rem;
                        --fsz30: 2.25rem;
                        --fsz40: 2.75rem;
                        --fsz80: 5.2rem;
                        --fsz90: 6.5rem;
                        --fsz110: 7.2rem;
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                        scroll-behavior: smooth;
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
                    a {
                        text-decoration: none;
                        color: var(--gray);
                    }
                `}
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>

            <Header />
            {props.children}
            <Footer />
        </>
    );
}
 
export default Layout;