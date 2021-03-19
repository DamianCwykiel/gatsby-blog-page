import React from 'react'
// import ReactDOM from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Head from '../components/head'
// import Header from '../components/header';

// import skillsStyles from './skills.module.scss';
import Skills from './skills'
import Tools from './tools'

import introStyles from './index.module.scss'
// import headerStyles from '../components/header.module.scss'

// import animate from './animate'


import { gsap } from 'gsap/dist/gsap';


import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// let section = document.getElementById('About')

// section = () => {
//     gsap.fromTo(section, {y:'+= 100', autoAlpha: 0, backgroundColor: 'green'}, {duration: 1, y:'-=10', ease: 'power4.inOut', backgroundColor: 'blue', autoAlpha: 1, scrollTrigger: {
//         trigger: 'section',
//         start: 'top 20%',
//         scrub: 1,
//     }})
// }



// const sectionAbout = document.querySelector('.aboutMeText')

//     gsap.fromTo(sectionAbout, {opacity: 0.1, x: '-=100vw'}, { x: '+=50vw', opacity: 1, stagger: 0.1, duration: 3, ease: 'power1.inOut', scrollTrigger: {
//         trigger: 'sectionAbout',
//         start: 'top 5rem', 
//         markers: true,
//         scrub: 1,
//     }})







const IndexPage = () => {

    const about = document.querySelector('[data-about-me]');
    

    gsap.fromTo(about, {y:'0', backgroundColor: 'transparent'}, 
    {y:'-=100', duration: 1, backgroundColor: 'blue', scrollTrigger: {
        trigger: 'about',
        start: '1px 15vh',
        scrub: 1,
        // markers: true, 
    }}, [0])





gsap.defaults({ease: "none"});

const tl1 = gsap.timeline({repeat: 5, repeatDelay:.8, yoyo:true});
tl1.from("#h1", {duration: 2, repeat: 1, text: "Hi!", color: '#ff3300', delay: 1})
tl1.to("#h1", {duration: 2, repeat: 1, text: "Hallo!", color: '#00ccff', delay: 1})
tl1.to("#h1", {duration: 2, repeat: 1, text: "Cześć!", color: '#40c057', delay: 1})


const tl2 = gsap.timeline({repeat: 5, repeatDelay:1.5, yoyo:true});
tl2.from("#h3", {duration: 3, text: "I'm-Damian.", ease: 'power1.in', delay: 1})
tl2.to("#h3", {duration: 3, text: "Junior-Web-Dev.", ease: 'power3.Out', delay: 1})
tl2.to("#h3", {duration: 3, text: "based-in-Poland.", ease: 'power4.Out', delay: 1})

const tl3 = gsap.timeline({repeat: 5, repeatDelay:1.5, yoyo:true});
tl3.from("#p", {duration: 3, repeat: 5, delay: 1, ease: 'power3.in', color: '#66cd00'});
tl3.to("#p", {duration: 4, repeat: 5, delay: 1, ease: 'power4.Out', color: '#845ef7'});

const tl4 = gsap.timeline({repeat: 3, repeatDelay:1, yoyo:true});
tl4.from("#About", {duration: 3, color: '#ffffff', fontSize: '.6rem', opacity: 0.2, textAlign: 'right', ease: 'power1.inOut'})
tl4.to("#About", {duration: 4, color: '#060606', fontSize: '.9rem', textAlign: 'center', opacity: 1, ease: 'power1.inOut'})
//   .to("#green", {x:100})
//   .set("#green",  {text:"I am done"})
    gsap.config({
    
        nullTargetWarn: false,
        
      });  

    // const about = document.getElementById('About');


    // const tl = gsap.timeline({repeat: 1, repeatDelay: 2});
    // tl.fromTo(about, {x: '100', autoAlfa: 1, duration: 2,}, { x: '+=150', opacity: .5, autoAlfa: 0, duration: 2,});
    // tl.to(about, {x: '+=50', opacity: 1, duration: 3, autoAlfa: 1});

    // tl.pause(0);
    // tl.resume(2);
    // tl.seek(1.5);
    // tl.reverse(5);
    return (
        <Layout>
            <Head title="Home" />
            {/* <main> */}
                {/* <section className={introStyles.blockIntro}></section>
                <section className={introStyles.blockIntroBorder}></section> */}
                <section className={introStyles.introContainer} id ="Intro">
                    <div className={introStyles.introTopic}>
                        <h1 id='h1'>Hi.</h1>
                        <h3 id ='h3'>I'm Damian.</h3>
                        <p id ='p'>Do you need a developer? <a href = "/cv/CV/CV-Damian_Cwykiel_PL.pdf" target="_blank" rel="noopener referrer">Click here.</a></p>
                        {/* <button  type="button" onClick={() => Link('/#')}>cdsfdsf</button> */}
                    </div>
                    <div className={introStyles.introTopic}>
                        <div className={introStyles.figure}>
                            <div className={introStyles.figure}></div>
                        </div>
                    </div>
                </section>
                <section className={introStyles.blockAbout}> 
                    <div className={introStyles.img}></div>
                </section>
                <Head title="about" />
                <section data-about-me className = {introStyles.containerAboutMe} id ="About">
                    <div className = {introStyles.aboutMeText}>
                        <h1>ABOUT.ME</h1>
                            <p>	My name is <Link className = {introStyles.aboutMeLinks} to ="/cv/CV/CV-Damian_Cwykiel_PL.pdf" rel="noreferrer" target="_blank"> Damian </Link> 
                            and I am a progresive  web developer and an<a className = {introStyles.aboutMeLinks} href ="img/archeolog.jpg" alt="archeolog.jpg" rel="noreferrer" target="_blank"> archaeologist</a>.</p>
                            <p> I'm keen on the really good <a className = {introStyles.aboutMeLinks} href="https://node-forecast-app.herokuapp.com" rel="noreferrer" target="_blank"> weather </a> 
                            and <a className = {introStyles.aboutMeLinks} href="https://distrotest.net/Kali%20Linux" rel="noreferrer" target="_blank"> penguins</a>.</p>
                            <p>I love to <a className = {introStyles.aboutMeLinks} href="/projectsPage"> create</a> and explore also a new <a className = {introStyles.aboutMeLinks} href="https://nofluffjobs.com/pl" rel="noreferrer" target="_blank"> places</a>.</p>
                            <p>I like to solve strange <a className = {introStyles.aboutMeLinks} href="https://stackoverflow.com/questions" rel="noreferrer" target="_blank"> problems </a>
                            and just to have a good time <a className = {introStyles.aboutMeLinks} href="https://github.com/DamianCwykiel?tab=repositories" rel="noreferrer" target="_blank"> building</a>.</p>
                            <p>	I always enjoy learning new <a className = {introStyles.aboutMeLinks} href="/#Skills" rel="noreferrer"> skills</a> and <a className = {introStyles.aboutMeLinks} href =" https://www.docker.com" rel="noreferrer" target="_blank"> possibilities</a>.</p> 
                            <p>Except diving into <a className = {introStyles.aboutMeLinks} href="https://pl.reactjs.org/" rel="noreferrer" target="_blank"> front</a> & <a className = {introStyles.aboutMeLinks} href="https://nodejs.org/en/" rel="noreferrer" target="_blank"> back-end </a> 
                            technology I like <a className = {introStyles.aboutMeLinks} href ="https://ctflearn.com/challenge/1/browse" rel="noreferrer" target="_blank"> to relax </a> 
                            gaming or <a className = {introStyles.aboutMeLinks} href="https://damian-nodeproject-v3.herokuapp.com/" rel="noreferrer" target="_blank"> chatting</a>.</p> 
                            <p>Also probably I am a computer maniac and the big fun of archeology and <a className = {introStyles.aboutMeLinks} href="https://pl.wikipedia.org/wiki/Architektura_oprogramowania" rel="noreferrer" target="_blank"> architecture</a>.</p>
                            <p>In the end of this conclusion, I'm looking for a task that truly involves me.</p>
                            <p>If you ain't extremely bored of this <a className = {introStyles.aboutMeLinks} href="https://damiancwykiel-blog-page.netlify.com" rel="noreferrer" target="_blank"> section </a> and you like my website - </p> 
                            <p><a className = {introStyles.aboutMeLinks} href="/#Contact"> contact</a> me for some information.</p>
                            <Link className={introStyles.navItemAbout} to="/aboutPage"><h2>more...</h2></Link>
                    </div>
                </section>
                <section className = {introStyles.containerSkills} id="Skills">     
                    <Skills/>
                </section>
                <section className = {introStyles.containerTools} id="Tools">
                    <div className={introStyles.toolsSlider}>
                        {/* https://reactjsexample.com/a-flexible-and-responsive-carousel-component-for-react/ */}

                        <Tools/>
                    </div>
                </section>
                <section className = {introStyles.containerContact} id="Contact">
                    <div className = {introStyles.contactBlock}>
                        <div className = {introStyles.contactDetails}>
                            <h2>Get In Touch</h2>
                            <p>Have a question?</p>
                            <a className = {introStyles.contactButtonLink} href = "https://gmail.com"  rel="noreferrer" target="_blank"><div className = {introStyles.contactButton}>Contact.Me.</div></a>
                        </div>
                    </div>
                </section>
                {/* <section className={introStyles.block}></section> */}
                <section className = {introStyles.containerConclusion}>
                    <div className = {introStyles.conclusionBlock}>
                        <div className = {introStyles.conclusionDetails}>
                            <a className = {introStyles.contactButtonLink} href = "http://newsletter.damiancwykiel-website.eu/" rel="noreferrer" target="_blank"><div className = {introStyles.contactButton}>Newsletter</div></a>
                        </div>
                    </div>
                </section>
            {/* </main>      */}
        </Layout>
    )
}

export default IndexPage


