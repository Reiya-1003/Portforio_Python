import React, { Fragment, useState, useEffect } from 'react';
import styles from "../styles/App.module.scss"; 
import kari from '../image/Header.jpg'
import axios from 'axios';

const Practice = () => {

    const [posts, setPosts] = useState([{}]);
   const IMG_PASS= "../../PraPhot/"
  useEffect(() => {
    const fetchData = async () =>{
    const result = await axios(
      'http://localhost:8000/api/posts/' //pythonのGet
    );
　　 let newposts = result.data
    setPosts(newposts);
    
   
  };

  fetchData();
  console.log(posts)
  
 
},[]);
console.log(posts)


const Items = posts.map((post,index)=>{
    
    return <div className={styles.item} key={index}>
        <a href={post.url}>
    <img src={IMG_PASS + post.photnum} className={styles.phot}></img></a>
<div className={styles.title}>{post.title}</div>
<div className={styles.detail}>{post.detail}</div>

</div>
  })

    return (
    <div className={styles.blackcontents}>
        <div className={styles.blacktitle}>PRACTICE</div>
        <div className={styles.skill}>
            <div className={styles.title}>スキル要約</div>
            <div className={styles.content}>
                <p>OS 　　　  　　：Linux, MacOS Big Sur 11.5.2</p>
                <p>言語　　　　　：JavaScript, TypeScript, PHP, SQL, HTML, CSS</p>
                <p>フレームワーク：React.js(16.8以降,Redux,React-Router), Next.js, Laravel, express, Vue.js, Nuxt.js,</p> 
                <p>Jest,Node.js, Material-UI, Apollo, PHPUnit, Ajax, Axios, Vuetify, MaterializeCSS,GoogleAppsScript, </p> 
                <p>Sass, TailwindCSS, vue-virtual-scroll-list, NextAuth</p>
              <p>ツール　　　　：Docker, AWS, nginx, mongoDB, MySQL, NoSQL(Firebase CloudFireStore), Git, VSCode, Redmine</p>
            </div>
        </div>
        <div className={styles.seisaku}>制作物</div>
        <div className={styles.itembox}>
            {Items}
          
            
        </div>
    </div>
    )
}

export default Practice