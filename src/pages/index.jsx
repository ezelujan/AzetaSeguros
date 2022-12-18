import React from 'react';
import Home from '../components/home';
import Layout from '../components/layout';
import Sponsors from '../components/sponsors';
import Blog from '../components/blog';

const IndexPage = () => {
    return (
        <Layout>
            <Home />
            <Sponsors />
            <Blog />
        </Layout>
    );
};

export default IndexPage;
