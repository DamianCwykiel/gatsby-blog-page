import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyles from './aboutPage.module.scss';

const aboutPage = () => {
    return (
        <Layout>
            <Head title="aboutMe"/>
            <section className = {aboutStyles.aboutMeContainer} id="About">
                <div className = {aboutStyles.aboutMeContent}>
                    <div className = {aboutStyles.aboutMeText}>
                        <h1>About.Me</h1>
                        <div className={aboutStyles.aboutMeBlock}> 
                            <div className = {aboutStyles.aboutImg2}></div>
                        </div>
                        <article>
                            <h2>Hello! My name is Damian and I am a progressive Web Developer.</h2>
                                <p>I am a big fun of <span>JavaScript</span> that I mostly use in my projects.</p>
                                <p><span>I also like to use JS frameworks/libtraries as React and Vue.</span></p>
                                <p><span> In backend technology I work with Node & MongoDB or I choose basics PHP with MySQL.</span></p>
                                <p>I am eager to learn and develop knowledge, skills and languages.</p>
                                <p>
                                    <span>In programming I love creativity</span>
                                </p>
                                <p>
                                    <span>and freedom of using avalable tools</span> and <span>libraries.</span>
                                </p>
                            <h2>Energies</h2>
                                <p>
                                    I also am a big fun of any kind of<span> technology,</span> machines <span>,engines and computers.</span> I love to play in <span>warlike games</span>
                                </p>
                                    <span>often I am a computer maniac who cannot take a break from work.</span>
                                <p>I like to take photos <span>and enjoy of modify it with graphic tools.</span>
                                    <p>
                                        <span> PhotoScape or Gimp,</span>
                                        <span> sometimes in PhotoShop, usually in basics mode.</span>
                                    </p>
                                </p>
                            <h2>Free time</h2>
                                <p>
                                    I like to spend my time creatively. I am interested in archeology and <span>I also like to read books.</span>
                                </p>
                                <p>
                                    <span>When I have time off, I love travelling to new places.</span><span>
                                <p>
                                    I always enjoy getting to know new cultures and tasting foreign cusine.</p></span>
                                </p>
                            <h2>Privately</h2>
                                <p>
                                    <span>I live in Rzeszów and work in Norway.</span> I am looking for new opportunities as frontend developer in Poland. 
                                </p> 
                            <h2>Officially</h2>
                                <p>
                                    <span>I am open to relocate or remote job.</span> I will consider every offer but 
                                    <span> I would rather like the stationary job.</span>
                                <p>At the end.</p>
                                </p>
                            <h3>Thank you for visit website.dc!</h3>
                        </article>
                        <div className={aboutStyles.imgAboutMeContainer}>
                            <img src='img/icons/thankyou-aboutme-1.png' alt="thnakyou.png"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default aboutPage