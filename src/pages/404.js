import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      <Link to="/">
          head back to home
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
