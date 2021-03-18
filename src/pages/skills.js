import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item"

// import Layout from "../components/layout"

import skillsStyles from "./skills.module.scss";

import introStyles from "./index.module.scss";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const skillsCarousel = () => {
    return (
        <div className={introStyles.skillsSlider}>
            <div className={skillsStyles.skillsSlider} id="sliderSkills">
                <h1>SKILLS</h1>
                <div className={skillsStyles.skillsItems}>
                    <Carousel breakPoints={breakPoints}>
                        <Item className={skillsStyles.js}></Item>
                        <Item className={skillsStyles.jq}></Item>
                        <Item className={skillsStyles.react}></Item>
                        <Item className={skillsStyles.vue}></Item>
                        <Item className={skillsStyles.node}></Item>
                        <Item className={skillsStyles.mongodb}></Item>
                        <Item className={skillsStyles.firebase}></Item>
                        <Item className={skillsStyles.jest}></Item>
                        <Item className={skillsStyles.css}></Item>
                        <Item className={skillsStyles.sass}></Item>
                        <Item className={skillsStyles.bootstrap}></Item>
                        <Item className={skillsStyles.php}></Item>
                        <Item className={skillsStyles.mysql}></Item>
                        <Item className={skillsStyles.cpp}></Item>
                    </Carousel>
                </div> 
            </div>
        </div>
    )
}

export default skillsCarousel
