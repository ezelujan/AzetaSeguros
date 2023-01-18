import React from 'react';
import Home from '../components/home';
import Layout from '../components/layout';
import Sponsors from '../components/sponsors/sponsors';
import Articles from '../components/articles/articles';
import ProductHeader from '../components/products/productHeader';
import Products from '../components/products/products';

const IndexPage = () => {
    return (
        <Layout>
            <Home />
            <Sponsors />
            <Articles />
            <ProductHeader />
            <Products />
        </Layout>
    );
};

export default IndexPage;
