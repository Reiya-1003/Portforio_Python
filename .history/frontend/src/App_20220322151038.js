import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import pic from "./image/Header.jpg"
import styles from "./styles/App.module.scss";

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
        内容
      </div>
    </header>
     
      
    </Fragment>
  );
}

export default App;


