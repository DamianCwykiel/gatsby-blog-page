import React from 'react'
// import ReactDOM from 'react-dom';

import { Link, graphql, useStaticQuery } from 'gatsby'

import { SocialIcon } from 'react-social-icons';

import footerStyles from './footer.module.scss'
import headerStyles from './header.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author,
                    year
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.containerFooter}>
            <div className={footerStyles.footer}>
                <div className={footerStyles.columnContainer}>
                    <div className={footerStyles.one}>
                        <ul>
                            <li><p>Socials</p></li>
                            <li><SocialIcon net = "linkedin" bgColor="#555" style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/damian-cwykiel-8a9580172/" target = "_blank" label="linkedIn"/></li>
                            <li><SocialIcon net = "website" bgColor="#555" style={{ height: 40, width: 40 }} url="https://www.damiancwykiel-website.eu" target = "_blank" label="my_website" /></li>
                            <li><SocialIcon net = "github" bgColor="#555" style={{ height: 40, width: 40 }} url="https://github.com/DamianCwykiel?tab=repositories" target = "_blank" label="github" /></li>   
                            <li><SocialIcon net = "facebook" bgColor="#555" style={{ height: 40, width: 40 }} url="https://www.facebook.com/damian.cwykiel?ref=bookmarks" target = "_blank" label="fb"/></li>
                            <li><SocialIcon net = "twitter" bgColor="#555"  style={{ height: 40, width: 40 }} url="https://twitter.com/CwykielDamian" target = "_blank" label="twitter"/></li> 
                        </ul>
                    </div>
                    <div className={footerStyles.two}>
                        <ul>
                            <li><p>Quick skip</p></li>
                            <li><Link className={footerStyles.footerNav} activeClassName={headerStyles.activeNavItem} to ="#Intro">Intro</Link></li>
                            <li><Link className={footerStyles.footerNav} activeClassName={headerStyles.activeNavItem} to ="#About">About</Link></li>
                            <li><Link className={footerStyles.footerNav} activeClassName={headerStyles.activeNavItem} to ="#Skills">Skills</Link></li>
                            <li><Link className={footerStyles.footerNav} activeClassName={headerStyles.activeNavItem} to ="/projectsPage">Projects</Link></li>
                            <li><Link className={footerStyles.footerNav} activeClassName={headerStyles.activeNavItem} to ="/blog">Blog</Link></li>
                            <li><Link className={footerStyles.footerNav} activeClassName={headerStyles.activeNavItem} to ="https://newsletter.damiancwykiel-website.eu/" target="_blank">Newsletter</Link></li>
                        </ul>
                    </div>
                    <div className={footerStyles.three}>
                        <ul>
                            <li><p>Other</p></li>
                            <li><a className={footerStyles.footerNav} href = 'cv/CV/CV-Damian_Cwykiel_PL.pdf' target = "_blank">CV</a></li>
                            <li></li>
                            <li><a className={footerStyles.footerNav} href = 'cv/CV/CV-Damian_Cwykiel_ENG.pdf' target = "_blank">-</a></li>
                            <li></li>
                            <li><a className={footerStyles.footerNav} href = 'cv/covLttr/cover-letter_PL.pdf' target = "_blank">-</a></li>
                            <li><a className={footerStyles.footerNav} href = 'cv/covLttr/cover-letter_ENG.pdf' target = "_blank">CL</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={footerStyles.foot}>
                    <p>Developed & Created by {data.site.siteMetadata.author}, {data.site.siteMetadata.year}</p>
            </div>
        </footer>
    )
}

export default Footer