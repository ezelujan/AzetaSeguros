import React from 'react';
import Home from '../components/home';
import Layout from '../components/layout';
import Sponsors from '../components/sponsors/sponsors';
import Articles from '../components/articles/articles';

const IndexPage = () => {
    return (
        <Layout>
            <Home />
            <Sponsors />
            <Articles />
        </Layout>
    );
};

export default IndexPage;
