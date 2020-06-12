import React from 'react';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


import Layout from '../components/layout';
import Head from '../components/head';

// export const query = graphql`
//     query(
//         $slug: String!
//     ) {
//         markdownRemark(
//             fields: {
//                 slug: {
//                     eq: $slug
//                 }
//             }) 
//         {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `;

export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        introduction {
            json
        }
    }
}
`

const Blog = ({data}) => {
    const {title, publishedDate, introduction} = data.contentfulBlogPost;
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                if(node.data.target && !node.data.target.fields) {
                    return "embeded"
                }
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url}/>
            }
        }
    }
    return(
        <Layout>
            <Head 
                title={`Blog | ${title}`}
            />
            <h1>{title}</h1>
            <p>{publishedDate}</p>
            <div>
                {documentToReactComponents(introduction.json, options)}
            </div>
            <p>{publishedDate}</p>
        </Layout>
    )
}

export default Blog;
