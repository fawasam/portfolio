import { useEffect } from 'react';
import "./project.scss"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocomotiveScroll from 'locomotive-scroll';
//img
import Resto from "../../assets/img/restaurant.png"
import Netflix from "../../assets/img/netflix.png"
import Portfolio from "../../assets/img/portfolio.png"
const Project = () => {

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
      });
      },[])
    return (
        <div className="project">
            <div className="left">
                <h1>Projects Menu</h1>
                <div className="image"
                
                data-scroll 
                data-scroll-speed="2" 
                data-scroll-repeat="true" 
                data-scroll-class="scroll-class" 
                >
                    <img
                     src={Resto} alt="" />
                    <div className="comment">
                        <h2>Restaurant Website</h2>
                      <span className="arrow"><ArrowForwardIcon className="icon"/></span> 
                        <span>Website & Branding</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="image"
                data-scroll 
                    data-scroll-speed="0" 
                    data-scroll-repeat="true" 
                    data-scroll-class="scroll-class" >
                    <img 
                    data-scroll 
                    data-scroll-speed="0" 
                    data-scroll-repeat="true" 
                    data-scroll-class="scroll-class" 
                    src={Netflix} alt="" />
                    <div className="comment">
                    <h2>Netflix Landingpage</h2>
                      <span className="arrow"><ArrowForwardIcon className="icon"/></span> 
                    <span>Website & Social</span>
                    </div>

                    <img 
                    
                    data-scroll 
                    data-scroll-speed="1" 
                    data-scroll-repeat="true" 
                    data-scroll-class="scroll-class" 
                    src={Portfolio} alt="" />.
                    <div className="comment">
                        <h2>Portfolio Website</h2>
                      <span className="arrow"><ArrowForwardIcon className="icon"/></span> 
                        <span>Website & Portfolio</span>
                     
                
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Project
