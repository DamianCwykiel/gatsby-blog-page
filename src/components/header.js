import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
// import Layout from '../components/layout'
import headerStyles from './header.module.scss'
// import LayoutStyles from './layout.module.scss'

import {gsap} from 'gsap/dist/gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
        const sec = document.querySelector('header')

        gsap.fromTo(sec, {minHeight: '10rem', backgroundColor: '#fff', borderBottom: 'none'}, 
        { minHeight: '3rem', backgroundColor: '#212529', borderBottom: '2px solid #111111', color: 'white', duration: 1,
            scrollTrigger: {
                trigger: 'sec',
                start: 'top 5rem', 
                scrub: 1,
        }}, [])

        gsap.config({

            nullTargetWarn: false,
            
        });

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.titleContainer}>
                <Link className={headerStyles.title} to ="/">
                    {data.site.siteMetadata.title}
                    {/* <img></img>       */}
                </Link>
            </div>
                <nav className={headerStyles.navContainer}>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#Intro">#intro</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/#About">#about</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/#Skills">#skills</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#Contact">#contact</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/projectsPage">#projects</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/blog">#blog</Link>
                        </li>
                            <a href = "http://newsletter.damiancwykiel-website.eu/"  rel="noreferrer" target="_blank"><button className={headerStyles.newsletter}>Newsletter</button></a>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;