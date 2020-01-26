import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hallo there!</h1>
            <h2>I'm Damian, a junior WebDeveloper from Rzeszów.</h2>
            <p>Do you need developer? <Link to = "/contactPage">Click here.</Link></p>
        </Layout>
    )
}

export default IndexPage
