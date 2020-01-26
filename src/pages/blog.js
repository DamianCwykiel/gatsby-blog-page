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
                       publishedDate(formatString:"MMM Do YYYY")
                   }
               }
           }
        }
    `)
    // console.log(data)
    return (
        <Layout>
            <h1>My Blog</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.myTitle}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol> 
        </Layout>
    )
}

export default Blog