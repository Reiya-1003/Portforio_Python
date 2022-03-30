import React, { Fragment, useState, useEffect } from 'react';
import styles from "./styles/App.module.scss";
import About from "./components/About"
import Practice from "./components/Practice"
import Contact from "./components/Contact"

const App = () => {
  



 

  return(
    <Fragment>
    　<header className={styles.headerbg}>
      <div className={styles.youso}>
        <p className={styles.koyouso}>About</p>
        <p className={styles.koyouso}>Practice</p>
        <p className={styles.koyouso}>Content</p>
      </div>
      <div className={styles.title}>REIYA EGAMI</div>
    </header>

    <About/>
    <Practice/>
    <Contact/>
     
      
    </Fragment>
  );
}

export default App;


