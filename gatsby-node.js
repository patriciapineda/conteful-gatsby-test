// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path = require('path')

// module.exports.onCreateNode = ({node, actions}) => {
//     const {createNodeField} = actions;

//     if(node.internal.type==='MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug,
//         });
//     }
// }

// module.exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions;

//     // 1. get path,
//     // 2. get markdown data
//     // 3. create new page

//     const blogTemplate = path.resolve('./src/templates/blog.js');

//     // from markdown file
//     // const res = await graphql(`
//     //     query {
//     //         allMarkdownRemark {
//     //             edges {
//     //                 node {
//     //                     fields{
//     //                         slug
//     //                     }
//     //                 }
//     //             }
//     //         }
//     //     }
//     // `);
    
//     const res = await graphql(`
//         query {
//             allContentfulBlogPost {
//                 edges {
//                     node {
//                         slug
//                     }
//                 }
//             }
//         }
//     `)

//     res.data.allContentfulBlogPost.edges.forEach((edge) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.slug}`,
//             context: {
//                 slug: edge.node.slug,
//             }
//         });
//     });
// }
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}