import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head 
        title="Home page" 
      />
      <h1>Home page</h1>
      <h2>I'm Patricia living in MNT VW</h2>
    </Layout>
  );
};

export default IndexPage;
