import React, {useState} from "react";
import "./more.scss"
import {Works} from "./data"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const MoreWorks = () => {
    return (
        <div className="works">
            <div className="left">
                <h1>More <br /><span>Works</span> </h1>
            </div>
            <div className="right">
            <p>More of my design and development work on platform like github,behance and codepen</p>
                {Works.map((work)=>(
                  <div className="work">
                    <div className="left2">
                      <h2>{work.title}</h2>
                      <div className="span">
                      <span>{work.category}</span>
                      <span className="dot">•</span>
                      <span>{work.source}</span>
                      </div>
                    </div>
                    <div className="right2">
                      <span className="arrow"><ArrowForwardIcon/></span> 
                    </div>               
                  </div>
                ))}
                <span className="playground">PlayGround</span>
            </div>
            
        </div>
    )
}

export default MoreWorks
