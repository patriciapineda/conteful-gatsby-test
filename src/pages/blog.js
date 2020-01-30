import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';


import Layout  from '../components/layout'; 
import Head from '../components/head';


import Styles from './blog.module.scss';

const BlogPage = () => {
    const queryData = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
            sort:{
                fields: publishedDate,
                order: DESC
            }){
            edges {
                node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `);

    const edgeNodes = queryData.allContentfulBlogPost.edges;
    const posts = edgeNodes.map((edge)=> {
        const {title, publishedDate, slug} = edge.node;
        return (
            <li key={slug} className={Styles.post}>
                <Link to={`/blog/${slug}`}>
                    <h2>
                        {title}
                    </h2>
                    <p> {publishedDate} </p> 
                </Link>
            </li>
        )
    });

    return (
        <Layout> 
            <Head 
                title="Blog" 
            />
            <h1>Blog</h1>
            <h2>Latest post</h2>
            <ol className={Styles.posts}>
                {posts}
            </ol>
        </Layout>
    );    
}
export default BlogPage;