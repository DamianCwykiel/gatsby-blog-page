import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
           allContentfulBlogPost (
               sort: {
                   fields:publishedDate,
                   order:DESC
               }
           ){
               edges {
                   node {
                       myTitle
                       slug
                       publishedDate(formatString:"MMMM Do, YYYY")
                   }
               }
           }
        }
    `)
    // console.log(data)
    return (
        <Layout>
            <main>
                <div className={blogStyles.blogContainer}>
                    <div className={blogStyles.blogHeader}>
                        <h1>Blog</h1>
                        <p>JavaScript, React, Node.js, Vue.js, Gatsby</p>
                    </div>
                    <ol className={blogStyles.posts}>
                            {data.allContentfulBlogPost.edges.map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <div className={blogStyles.postsItem}>
                                            <h2>{edge.node.myTitle}</h2>
                                            <p>{edge.node.publishedDate}</p>
                                            <p>used technics</p>
                                            <Link to={`/blog/${edge.node.slug}`}>
                                                <div className={blogStyles.postButton}>Check</div>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            })}
                    </ol> 
                </div>
            </main>
        </Layout>
    )
}

export default Blog