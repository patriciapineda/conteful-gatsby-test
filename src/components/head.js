import React from 'react';
import {Helmet} from 'react-helmet';
import {graphql, useStaticQuery} from 'gatsby';

const Head = ({title})=> {
    const data =  useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`);
    const metadataTitle = data.site.siteMetadata.title;
    return (
        <Helmet
            title={`${metadataTitle} | ${title}`}
        />
    )
}
export default Head;