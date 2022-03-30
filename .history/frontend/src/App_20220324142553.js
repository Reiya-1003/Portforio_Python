import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles/App.module.scss";
import About from "./components/about"
import Practice from "./components/practice"
import Contact from "./components/contact"

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
    const result = await axios(
      'http://localhost:8000/api/posts/' //pythonのGet
    );
　　
    setPosts(result.data);
    console.log(posts)
   
  };
  fetchData();
 
},[]);

 

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


