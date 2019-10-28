import React from 'react';

import Layout  from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout> 
            <Head 
                title="Contact" 
            />
            <h1>Contact</h1>
            <p>
                You can email me at <a href="mailto:anetpatty@gmail.com">anetpatty@gmail.com</a>
            </p>
        </Layout>
    );
};

export default ContactPage;