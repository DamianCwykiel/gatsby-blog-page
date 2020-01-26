import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFoundPage = () => {
    return (
    <Layout>
    <Head title="404!"/>
        <div>
            <h1>Sorry. Page not Foud O_O</h1>
            <p><Link to="/">Back home</Link></p>
        </div>
    </Layout>
    )
}

export default NotFoundPage