import './App.scss';
import {BrowserRouter as Router } from "react-router-dom"
import LocomotiveScroll from 'locomotive-scroll';

import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import MoreWorks from './components/moreWorks/MoreWorks';
import Project from './components/projects/Project';
// import CustomCursor from "../src/components/CustomeCursor/index"
// import CustomCursor2 from "../src/components/CustomeCursor2/index"
import Cursor from './components/CustomCursor/Cursor';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  });
  console.log(scroll);
  },[])

  return (
    <>
    <Cursor/>
    <div className="App" data-scroll-container>
      <Router>
      <Nav/>
      <div data-scroll-section data-scroll-speed="0">
      <Main/>
      </div>
      <div data-scroll-section data-scroll-speed="0">
      <Project/>
      </div>
      <div data-scroll-section data-scroll-speed="0">
      <MoreWorks/>
      </div>
      </Router>

    </div>
    </>
  );
}

export default App;
