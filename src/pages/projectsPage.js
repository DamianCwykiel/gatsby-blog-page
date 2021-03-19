import React from 'react';

// import { Link } from 'gatsby';

import Layout from '../components/layout';

import projectPageStyles from './projectPage.module.scss';

import {gsap} from 'gsap/dist/gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Draggable } from 'gsap/dist/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const projectsPage = () => {

    const tile = document.querySelectorAll('[data-project-tile]')
    const tile2 = document.querySelectorAll('[data-project-tile2]')

        gsap.fromTo(tile, {y: '0', backgroundColor: '#6495ED', opacity: 1}, 
        {y: '-=100vh', backgroundColor: '#483D8B', duration: 2, delay: 2, stagger: .1, opacity: 0.7, scaleX: 1.2, 
        z: '=-300', ease: 'power4.easeInOut',
            scrollTrigger: {
                trigger: 'tile',
                start: '-1vh 100vh', 
                // markers: true,
                scrub: .5,
        }}, [0])

        gsap.fromTo(tile2, {x: '0', backgroundColor: '#6495ED'}, 
        {x: '-=100vh', backgroundColor: '#483D8B', duration: 1, delay: 0, stagger: .2, ease: 'power3.easeIn', opacity: 1,
            scrollTrigger: {
                trigger: 'tile2',
                start: '500vh 100vh', 
                // markers: true,
                scrub: 3,
        }}, [0])

        Draggable.create("#myTile", {
            type:"x, y",
            inertia: true,
            isTrowing: true,
            dragClickables: true,
            
            // onClick: function() {
            //     console.log("clicked");
            //     gsap.to(this, {duration: 0.2, backgroundColor: "red"});
            // },
            // onDragEnd: function() {
            //     gsap.to(this, {duration: 0.2, backgroundColor: "red"});
            //     console.log("drag ended");
            // }
        });

        gsap.config({

            nullTargetWarn: false,
            autoSleep: 60,
  force3D: false,
            
        });
    return (
        <Layout>
            <div className={projectPageStyles.projectContainer}> 
                <div className = {projectPageStyles.projectHeader}>
                    <h1>Websites & Apps</h1>
                    <p>JavaScript, React, Node.js, Vue.js, Gatsby & GraphQl</p>
                </div>
                <ul className = {projectPageStyles.projectItems}>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div data-project-tile className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/paymentapp.png' alt="paymentapp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>MonthlyPaymentsKeeperApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                    <span>React, Redux, Webpack, Babel, AirBnb, Sass, Jest, Firebase</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/reactblack.png' alt="react.png"/>
                                <img src='img/icons/redux.png' alt="redux.png"/>
                                <img src='img/icons/webpack.png' alt="webpack.png"/>
                                <img src='img/icons/babel.png' alt="babel.png"/>
                                <img src='img/icons/airbnb.png' alt="airbnb.png"/>
                                <img src='img/icons/sass.png' alt="sass.png"/>
                                <img src='img/icons/jest.png' alt="jest.png"/>
                                <img src='img/icons/firebase.png' alt="firebase.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://react-payment-app.herokuapp.com/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/MonthlyPaymentKeeperApp" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/shoppingapp.png' alt="shoppingApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>ShoppingApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                    <span>React, Sass, Webpack, Babel</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/reactblack.png' alt="react.png"/>
                                <img src='img/icons/sass.png' alt="sass.png"/>
                                <img src='img/icons/webpack.png' alt="webpack.png"/>
                                <img src='img/icons/babel.png' alt="babel.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://react-shopping-app.herokuapp.com/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/ShoppingApp" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/chatapp.png' alt="chatApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>LiveChatApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                    <span>Node, Socket.io, Mocha, Mustache</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/node.png' alt="node.png"/>
                                <img src='img/icons/socketio.png' alt="socket.png"/>
                                <img src='img/icons/mocha.png' alt="mocha.png"/>
                                <img src='img/icons/mustache.png' alt="mustache.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://damian-nodeproject-v3.herokuapp.com/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/live-chat-app-v3" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div data-project-tile className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/forecastapp.png' alt="forecastApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>ForecastApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                    <span>Node, WeatherApi, Mustache</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/node.png' alt="node.png"/>
                                <img src='img/icons/api.png' alt="api.png"/>
                                <img src='img/icons/mustache.png' alt="mustache.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://node-forecast-app.herokuapp.com/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/live-chat-app-v3" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/noteapp.png' alt="noteApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>NotesApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt='power.png'/>By</p>
                                    <span>JS</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://dc-notes-app.surge.sh/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/notes-js-app" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/todoapp.png' alt="todoapp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>TodoApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                <span>JS</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://dc-todo-app.surge.sh/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/todo-app" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div data-project-tile2 className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/md5calculator.png' alt="md5calculator.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>Md5Calculator</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                <span>JS, Sass, Webpack</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/sass.png' alt="sass.png"/>
                                <img src='img/icons/webpack.png' alt="webpack.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://frontendtask.netlify.app/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/frontendTask" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile2 className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/thenote.png' alt="thenote.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>TheNote</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                <span>JS, JQuery, PHP, MYSQL,Ajax, Bootstrap</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                                <img src='img/icons/php.png' alt="webpack.png"/>
                                <img src='img/icons/mysql.png' alt="webpack.png"/>
                                <img src='img/icons/ajax.png' alt="webpack.png"/>
                                <img src='img/icons/bootstrap.png' alt="webpack.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="http://damiancwkiel-noteapp.eu/index.php?logout=1" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/TheNote" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile2 className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/weatherapp.png' alt="weatherapp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>TheWeatherApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                <span>JS, Jquery, PHP, MYSQL,Ajax, Bootstrap, WeatherApi</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                                <img src='img/icons/php.png' alt="webpack.png"/>
                                <img src='img/icons/mysql.png' alt="webpack.png"/>
                                <img src='img/icons/ajax.png' alt="webpack.png"/>
                                <img src='img/icons/bootstrap.png' alt="webpack.png"/>
                                <img src='img/icons/api.png' alt="api.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://php-weatherapp.herokuapp.com/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/weatherapp-php" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div data-project-tile2 className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/viewconstructor.png' alt="viewconstructor.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>ViewConstructor</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                <span>JS, JQuery</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://damiancwykiel.github.io/ViewConstructor/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/ViewConstructor" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                    <div data-project-tile2 className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/devCourses.png' alt="devCourses.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>DevClasses</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                    <span>Node, JS, Sass, Mustache</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/node.png' alt="node.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/sass.png' alt="sass.png"/>
                                <img src='img/icons/mustache.png' alt="mustache.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://node-web-project.herokuapp.com/" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/node-web-project" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                        <div data-project-tile2 className = {projectPageStyles.projectItemsContent} id='myTile'>
                            <img src='img/website.png' alt="website.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>Website.eu</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p><img src ="img/icons/power-1.png" alt="power.png"/>By</p>
                                    <span>JS, JQ, PHP, Bootstrap</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/css.png' alt="css.png"/>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                                <img src='img/icons/php.png' alt="webpack.png"/>
                                <img src='img/icons/bootstrap.png' alt="webpack.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://damiancwykiel-website.eu/#" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png' alt="web.png"/></a>
                                <a href ="https://github.com/DamianCwykiel/PortfolioPage" rel="noreferrer" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png' alt="code.png"/></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default projectsPage;