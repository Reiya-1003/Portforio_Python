import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles/App.module.scss";
import About from "./components/about"

const App = () => {
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () =>{
//     const result = await axios(
//       'http://localhost:8000/api/posts/' //pythonのGet
//     );
// 　　
//     setPosts(result.data);
   
//   };
//   fetchData();
// },[]);
 

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

    <main className={styles.contents}>
      <div className={styles.title}>ABOUT</div>
      
      
    </main>
     
      
    </Fragment>
  );
}

export default App;


