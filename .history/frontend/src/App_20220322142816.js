import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import pic from "./image/Header.jpg"

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
      <img src={pic} alt="picture"></img>
    </div>
     
      
    </Fragment>
  );
}

export default App;


