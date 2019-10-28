import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import FooterStyles from './footer.module.scss';

const Footer = () => {
    const queryData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);
    return (
        <footer className={FooterStyles.footer}>
            {queryData.site.siteMetadata.author} | 2019
        </footer>
    )
}
export default Footer;