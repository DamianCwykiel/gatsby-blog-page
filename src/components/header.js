import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import headerStyles from './header.module.scss'
// import LayoutStyles from './layout.module.scss'

const Header = () => {
    //graphQl
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
                <h1>
                    <Link className={headerStyles.title} to ="/">
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
                <nav className={headerStyles.navContainer}>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/#About">About</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/#Skills">Skills</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#Contact">Contact</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/projectsPage">Projects</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/blog">Blog</Link>
                        </li>
                            <a href = "https://newsletter.damiancwykiel-website.eu" target="_blank"><button className={headerStyles.newsletter}>Newsletter</button></a>
                    </ul>
                </nav>
        </header>
    )
}

export default Header