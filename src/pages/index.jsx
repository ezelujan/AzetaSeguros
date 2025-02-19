import React from 'react';
import Home from '../components/home';
import Layout from '../components/layout';
import Sponsors from '../components/sponsors/sponsors';
import Articles from '../components/articles/articles';
import ProductHeader from '../components/products/productHeader';
import Products from '../components/products/products';
import Achievements from '../components/achievements/achievements';
import Allies from '../components/allies/allies';
import ContactUs from '../components/contactus/contactUs';
import LetStartNow from '../components/contactus/letStartNow';

const IndexPage = () => {
    return (
        <Layout>
            <Home />
            <Sponsors />
            <Articles />
            <ProductHeader />
            <Products />
            <Achievements />
            <Allies />
            <ContactUs />
            <LetStartNow />
        </Layout>
    );
};

export default IndexPage;
