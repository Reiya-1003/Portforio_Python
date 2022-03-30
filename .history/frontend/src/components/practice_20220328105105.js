import React, { Fragment, useState, useEffect } from 'react';
import styles from "../styles/App.module.scss"; 
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

const Practice = () => {

    const {ref,inView} = useInView({
        rootMargin: '-300px', // ref要素が現れてから200px過ぎたら
        triggerOnce:true,  // 最初の一度だけ実行
    })

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
    <div className={styles.blackcontents} ref={ref}>
        {inView &&(
        <div className={styles.blacktitle}>PRACTICE</div>
        )}
        <div className={styles.skill}>
            <div className={styles.title}>スキル要約</div>
            <div className={styles.content}>
                <div className={styles.janru}>
                <p>OS</p>
                <p>言語</p>
                <p>フレームワーク</p>
                <br/>
                <br/>
                <br/>
                <p>ツール</p>
                </div>
                <div className={styles.nakami}>
                <p>Linux, MacOS Big Sur 11.5.2</p>
                <p>JavaScript, TypeScript, PHP, SQL, HTML, CSS</p>
                <p>React.js(16.8以降,Redux,React-Router), Next.js, Laravel, express, Vue.js, Nuxt.js,</p> 
                <p>Jest, Node.js, Material-UI, Apollo, PHPUnit, Ajax, Axios, Vuetify, MaterializeCSS,</p> 
                <p>GoogleAppsScript, Sass, TailwindCSS, vue-virtual-scroll-list, NextAuth</p>
                <p>Docker, AWS, nginx, mongoDB, MySQL, NoSQL(Firebase CloudFireStore),</p>
                <p>Git, VSCode, Redmine</p>
            
                </div>
                
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
