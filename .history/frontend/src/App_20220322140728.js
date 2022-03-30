import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async() =>{
    const result = await axios(
      'http://localhost:8000/api/posts/'
    );

    setPosts(result.data);
   
  };
  fetchData();
},[]);
  console.log(posts)

  return(
    <Fragment>
      <div>home page</div>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
      
    </Fragment>
  );
}

export default App;


