import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';

import projectPageStyles from './projectPage.module.scss';

const projectsPage = () => {
    return (
        <Layout>
            <div className={projectPageStyles.projectContainer}> 
                <div className = {projectPageStyles.projectHeader}>
                    <h1>Websites & Apps</h1>
                    <p>JavaScript, React, Node.js, Vue.js, Gatsby & GraphQl</p>
                </div>
                <ul className = {projectPageStyles.projectItems}>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/paymentapp.png'/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>MonthlyPaymentsKeeperApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
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
                                <a href ="https://react-payment-app.herokuapp.com/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/MonthlyPaymentKeeperApp" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/shoppingapp.png' alt="shoppingApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>ShoppingApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
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
                                <a href ="https://react-shopping-app.herokuapp.com/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/ShoppingApp" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/chatapp.png' alt="chatApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>LiveChatApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
                                    <span>Node, Socket.io, Mocha, Mustache</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/node.png' alt="node.png"/>
                                <img src='img/icons/socketio.png' alt="socket.png"/>
                                <img src='img/icons/mocha.png' alt="mocha.png"/>
                                <img src='img/icons/mustache.png' alt="mustache.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://damian-nodeproject-v3.herokuapp.com/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/live-chat-app-v3" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/forecastapp.png' alt="forecastApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>ForecastApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
                                    <span>Node, WeatherApi, Mustache</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/node.png' alt="node.png"/>
                                <img src='img/icons/api.png' alt="api.png"/>
                                <img src='img/icons/mustache.png' alt="mustache.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://node-forecast-app.herokuapp.com/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/live-chat-app-v3" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/noteapp.png' alt="noteApp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>NotesApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
                                    <span>JS</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src=''/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                            <a href ="https://dc-notes-app.surge.sh/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                    <a href ="https://github.com/DamianCwykiel/notes-js-app" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/todoapp.png' alt="todoapp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>TodoApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p>PoweredBy</p>
                                <span>JS</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src=''/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://dc-todo-app.surge.sh/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/todo-app" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/md5calculator.png' alt="md5calculator.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>Md5Calculator</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p>PoweredBy</p>
                                <span>JS, Sass, Webpack</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/sass.png' alt="sass.png"/>
                                <img src='img/icons/webpack.png' alt="webpack.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://frontendtask.netlify.app/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/frontendTask" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/thenote.png' alt="thenote.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>TheNote</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p>PoweredBy</p>
                                <span>JS, JQuery, PHP, MYSQL,Ajax, Bootstrap</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                                <img src='img/icons/php.png' alt="webpack.png"/>
                                <img src='img/icons/mysql.png' alt="webpack.png"/>
                                <img src='img/icons/ajax.png' alt="webpack.png"/>
                                <img src='img/icons/bootstrap.png' alt="webpack.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="http://damiancwkiel-noteapp.eu/index.php?logout=1" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/TheNote" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/weatherapp.png' alt="weatherapp.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>TheWeatherApp</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p>PoweredBy</p>
                                <span>JS, Jquery, PHP, MYSQL,Ajax, Bootstrap, WeatherApi</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                                <img src='img/icons/php.png' alt="webpack.png"/>
                                <img src='img/icons/mysql.png' alt="webpack.png"/>
                                <img src='img/icons/ajax.png' alt="webpack.png"/>
                                <img src='img/icons/bootstrap.png' alt="webpack.png"/>
                                <img src='img/icons/api.png' alt="api.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://php-weatherapp.herokuapp.com/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/weatherapp-php" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/viewconstructor.png' alt="viewconstructor.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>ViewConstructor</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                            <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                <p>PoweredBy</p>
                                <span>JS, JQuery</span>
                            </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://damiancwykiel.github.io/ViewConstructor/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/ViewConstructor" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                    </li>
                    <li className = {projectPageStyles.itemsContainer}>
                    <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/devCourses.png' alt="devCourses.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>DevClasses</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
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
                                <a href ="https://node-web-project.herokuapp.com/" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/node-web-project" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                        <div className = {projectPageStyles.projectItemsContent}>
                            <img src='img/website-1.png' alt="website.png"/>
                            <div className = {projectPageStyles.projectItemsContentText}>
                                <h3>Website.eu</h3>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIconsTopic}>
                                <div className={projectPageStyles.projectItemsContentIconsTopicP}>
                                    <p>PoweredBy</p>
                                    <span>JS, JQ, PHP, Bootstrap</span>
                                </div>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <img src='img/icons/js.png' alt="js.png"/>
                                <img src='img/icons/jquery.png' alt="sass.png"/>
                                <img src='img/icons/php.png' alt="webpack.png"/>
                                <img src='img/icons/bootstrap.png' alt="webpack.png"/>
                            </div>
                            <div className = {projectPageStyles.projectItemsContentIcons}>
                                <a href ="https://damiancwykiel-website.eu/#" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/web.png'/></a>
                                <a href ="https://github.com/DamianCwykiel/PortfolioPage" target="_blank"><img className = {projectPageStyles.projectItemsContentIconsImages} src='img/icons/code.png'/></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default projectsPage;