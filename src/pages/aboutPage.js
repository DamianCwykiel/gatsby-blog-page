import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyles from './aboutPage.module.scss';

const aboutPage = () => {
    return (
        <Layout>
            <Head title="about"/>
            <section className = {aboutStyles.aboutMeContainer} id="About">
                <div className = {aboutStyles.aboutMeContent}>
                    {/* <div className={aboutStyles.aboutMeBlock}>
                        <img className ={aboutStyles.aboutImg}/>
                    </div> */}
                    <div className = {aboutStyles.aboutMeText}>
                        <h1>About.Me</h1>
                        <div className={aboutStyles.aboutMeBlock}> 
                            <div className = {aboutStyles.aboutImg2}></div>
                        </div>
                        <h2>Hello! My name is Damian and I am a progressive Web Developer.</h2>
                        <p>My journey with <span>programming</span> started 2 years ago with a few projects <span>in basic Html, CSS, Bootstrap </span>
                     <p><span><h3>and with</h3> tons of articles and tips.</span> </p>but a real <span>huge</span> portion of time I have spent on <span>learning platforms</span></p>
                        <p><span>The most in programming I love creativity</span></p><p>and freedom of using mass of avalable <span>tools</span> and <span>libraries</span>
                        The running environments are impressive.<span><h2>and</h2> using them</span> <span>brings a programming joy</span></p>
                        <h1>Energies</h1><p>I am a big fun of any kind of<span>technology</span> machines <span>engines and computers</span> I love to play in <span><h2>warlike</h2> games</span></p>
                        <span>often I am a computer maniac.</span><p>I am interested in taking photos <span>and enjoy of modify them with graphic tools</span> for.example <span><h2>PhotoScape</h2>or Gimp</span></p>
                        <h1>Free time</h1>
                    </div>
                </div>
            </section>
            {/* <div className={aboutStyles.aboutMeBlock}>
                <img className ={aboutStyles.aboutImg}/>
            </div> */}
        </Layout>
    )
}

export default aboutPage