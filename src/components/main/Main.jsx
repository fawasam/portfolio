import React from 'react'
import "./main.scss"
//images
import Dribble from "../../assets/dribble.png"
import Gmail from "../../assets/gmail.png"
import Twitter from "../../assets/twitter.png"
import Linkdein from "../../assets/linkedin.png"
// import MoreWorks from '../moreWorks/MoreWorks'

const Main = () => {
    return (
        <div className="main"  data-scroll-section>
            <div className="name">
                <span data-scroll>Fawas am</span>
            </div>
            <div className="title" data-scroll>
                <h1>UX-UI designer <br/><span>UI developer
                </span>
                </h1>
            </div>
            <div className="falling_icon fall-gmail">
            <a href="mailto:fawasam32@gmail.com?Subject=Hello">  <img className="icon_media" src={Gmail} alt="imge"/></a>
            </div>
            <div className="falling_icon fall-twitter">
            <a href="https://twitter.com/FawasAM2">
             <img className="icon_media" src={Twitter} alt="imag"/></a>
            </div>
            <div className="falling_icon fall-linkdein">
            <a href="https://www.linkedin.com/in/fawas-am-6a29b4197/">
             <img className="icon_media" src={Linkdein} alt="imag"/></a>
            </div>

            {/* <MoreWorks/> */}
        </div>
    )
}

export default Main
