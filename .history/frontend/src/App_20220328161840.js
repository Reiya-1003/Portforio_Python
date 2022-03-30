import React, { Fragment, useState, useEffect } from 'react';
import styles from "./styles/App.module.scss";
import About from "./components/About"
import Practice from "./components/Practice"
import Contact from "./components/Contact"
import { Link as Scroll } from 'react-scroll';

const App = () => {
  



 

  return(
    <Fragment>
    　<header className={styles.headerbg}>
      <div className={styles.youso}>
      <Scroll to="about" smooth={true}><p className={styles.koyouso}>About</p></Scroll>
       <Scroll to="practice" smooth={true}><p className={styles.koyouso}>Practice</p></Scroll>
       <Scroll to="contact" smooth={true}><p className={styles.koyouso}>Content</p></Scroll> 
      </div>
      <div className={styles.title}>
        <p className={styles.bound}>
          <span>R</span>
          <span>E</span>
          <span>I</span>
          <span>Y</span>
          <span>A</span>
          <span></span>
          <span>E</span>
          <span>G</span>
          <span>A</span>
          <span>M</span>
          <span>I</span>
        </p>
      </div>
    </header>

    <About/>
    <Practice/>
    <Contact/>
     
      
    </Fragment>
  );
}

export default App;


