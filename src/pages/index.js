import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header';


import introStyles from './index.module.scss'
import headerStyles from '../components/header.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <main>
                <section className={introStyles.block}>
                    <div className={introStyles.img}></div>
                </section>
                <section className={introStyles.introContainer} id ="Intro">
                    <div className={introStyles.introTopic}>
                        <h1>Hi.</h1>
                        <h3>I'm Damian.</h3>
                        <p>Do you need developer? <a href = "cv/CV/CV-Damian_Cwykiel_PL.pdf" target="_blank">Click here.</a></p>
                    </div>
                    <div className={introStyles.introTopic}>
                        <div className={introStyles.figure}>
                            <div className={introStyles.figure}></div>
                        </div>
                    </div>
                </section>
                <Head title="about" />
                <section className = {introStyles.containerAboutMe} id="About">
                    <div className = {introStyles.AboutMeText}>
                        <h3>ABOUT.ME</h3>
                            <p>	My name is <a className = {introStyles.aboutMeLinks} href="https://damiancwykiel-website.eu/CV/CV-Damian_Cwykiel_PL.pdf" target="_blank"> Damian </a> 
                            and I am a progresive  web developer and an<a className = {introStyles.aboutMeLinks} href ="img/archeolog.jpg" alt="archeolog.jpg" target="_blank"> archaeologist</a>.</p>
                            <p> I'm keen on a really good <a className = {introStyles.aboutMeLinks} href="https://node-forecast-app.herokuapp.com" target="_blank"> weather </a> 
                            and animals - <a className = {introStyles.aboutMeLinks} href="https://distrotest.net/Kali%20Linux" target="_blank"> penguins</a>.</p>
                            <p>I love to <a className = {introStyles.aboutMeLinks} href="/projectsPage"> create</a> and explore also a new <a className = {introStyles.aboutMeLinks} href="https://nofluffjobs.com/pl" target="_blank"> places</a>.</p>
                            <p>I like to solve strange <a className = {introStyles.aboutMeLinks} href="https://stackoverflow.com/questions" target="_blank"> problems </a>
                            and just to have a good time <a className = {introStyles.aboutMeLinks} href="https://github.com/DamianCwykiel?tab=repositories" target="_blank"> building</a>.</p>
                            <p>	I always enjoy learning new <a className = {introStyles.aboutMeLinks} href="#skills"> skills</a> and <a className = {introStyles.aboutMeLinks} href =" https://www.docker.com" target="_blank"> possibilities</a>.</p> 
                            <p>Except diving into <a className = {introStyles.aboutMeLinks} href="https://pl.reactjs.org/" target="_blank"> front</a> & <a className = {introStyles.aboutMeLinks} href="https://nodejs.org/en/" target="_blank"> back-end </a> 
                            technology I like <a className = {introStyles.aboutMeLinks} href ="https://ctflearn.com/challenge/1/browse" target="_blank"> to relax </a> 
                            gaming or <a className = {introStyles.aboutMeLinks} href="https://damian-nodeproject-v3.herokuapp.com/" target="_blank"> chatting</a>.</p> 
                            <p>I also am a big fun of archeology and <a className = {introStyles.aboutMeLinks} href="https://pl.wikipedia.org/wiki/Architektura_oprogramowania" target="_blank"> architecture</a>.</p>
                            <p>In the end of this conclusion, I'm looking for a task that truly involves me.</p>
                            <p>If you ain't extremely bored of this <a className = {introStyles.aboutMeLinks} href="https://damiancwykiel-blog-page.netlify.com" target="_blank"> section </a> and you like my website - </p> 
                            <p><a className = {introStyles.aboutMeLinks} href="/contactPage"> contact</a> me for more information.</p>
                    </div>
                </section>
                <section className = {introStyles.containerSkills} id="Skills">
                    <div className={introStyles.skillSlider}>
                        <h1>SKILLS</h1>
                        
                        {/* https://reactjsexample.com/a-flexible-and-responsive-carousel-component-for-react/ */}
                        
                    </div>
                </section>
                <section className = {introStyles.containerContact} id="Contact">
                    <div className = {introStyles.contactBlock}>
                        <div className = {introStyles.contactDetails}>
                            <h2>Get In Touch</h2>
                            <p>Have a question? Need custom training for you or your company?</p>
                            <a className = {introStyles.contactButtonLink} href = "https://gmail.com" target="_blank"><div className = {introStyles.contactButton}>Gmail.Me.</div></a>
                        </div>
                    </div>
                </section>
            </main>        
        </Layout>
    )
}

export default IndexPage


