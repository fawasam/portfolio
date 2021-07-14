import React from 'react'
import "./nav.scss"
import {Link} from "react-router-dom"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//images
import Behance from "../../assets/behance.png"
import Gmail from "../../assets/gmail.png"
import Twitter from "../../assets/twitter.png"
import Linkdein from "../../assets/linkedin.png"
const Nav = () => {
    return (
        <>
            <div className="header">
                <div className="nav">
                    <h2>Home</h2>
                </div>
                 <div className="menu">
                    <ul>
                        <li><Link to="/">Playground</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li className="arrow-li">
                            <Link to="/">Connect
                            <span className="arrow"><ArrowDropDownIcon/></span> </Link>
                        <div className="dropdown-menu">
                        
                                <a href="mailto:fawasam32@gmail.com?Subject=Hello" target="_top"><span><img className="icon_media" src={Gmail} alt="imae"/>Gmail</span></a>
        
                           
                                <a href="https://www.behance.net/fawasam">
                                <span> <img className="icon_media" src={Behance} alt="imge"/> Behance</span></a>
                            
               
                            
                               <a href="https://twitter.com/FawasAM2"> <span>
                                 <img className="icon_media" src={Twitter} alt="imae"/>
                                Twitter</span></a>
                            
                           
                            <a href="https://www.linkedin.com/in/fawas-am-6a29b4197/">
                         <span>
                         <img className="icon_media" src={Linkdein} alt="iage"/>LinkedIn</span></a>
                            
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>    
        
    )
}

export default Nav
