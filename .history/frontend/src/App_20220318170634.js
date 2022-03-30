import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
    .get('http://localhost:8000/api/posts/')
    .then(res=>{setPosts(res.data);})
    .catch(err=>{console.log(err);});
  }, []);
  console.log(posts)

  return(
    <Fragment>
      {/* {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))} */}
    </Fragment>
  );
}

export default App;


