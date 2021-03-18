import React from "react";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item"

import toolsStyles from "./tools.module.scss";

import introStyles from "./index.module.scss";

    const toolsCarousel = () => {
        return (
            <div className={introStyles.toolsSlider}>
                <div className={toolsStyles.toolsSlider} id="tools">
                    <h1>TOOLS</h1>
                    <div className={toolsStyles.toolsItems}>
                        <Carousel >
                            <Item className={toolsStyles.webpack}></Item>
                            <Item className={toolsStyles.npm}></Item>
                            <Item className={toolsStyles.git}></Item>
                            <Item className={toolsStyles.yarn}></Item>
                            <Item className={toolsStyles.postman}></Item>
                            <Item className={toolsStyles.robo3T}></Item>
                        </Carousel>
                    </div> 
                </div>
            </div>
        )
    }

export default toolsCarousel;