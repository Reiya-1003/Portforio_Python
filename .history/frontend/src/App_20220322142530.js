import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import pic from "../public/Header.jpg"

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
    　<div>
      <img></img>
    </div>
     
      
    </Fragment>
  );
}

export default App;


