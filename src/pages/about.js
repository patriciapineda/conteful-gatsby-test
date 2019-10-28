import React from 'react';
import { Link } from 'gatsby';

import Layout  from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head 
                title="About" 
            />
            <h1>About</h1>
            <p>
                I'm Patricia and I'm a front end engineer. 
                Interested in chatting? {' '}
                <Link to="/contact">
                    Contact me
                </Link>
            </p> 
        </Layout>
    );
}

export default AboutPage;