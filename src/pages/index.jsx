import React from 'react';
import Home from '../components/home';
import Layout from '../components/layout';
import Sponsors from '../components/sponsors';

const IndexPage = () => {
    return (
        <Layout>
            <Home />
            <Sponsors />
        </Layout>
    );
};

export default IndexPage;
