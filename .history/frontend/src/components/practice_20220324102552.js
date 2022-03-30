import React from 'react'
import styles from "../styles/App.module.scss"; 
import kari from '../image/Header.jpg'

const practice = () => {
    return (
    <div className={styles.blackcontents}>
        <div className={styles.blacktitle}>PRACTICE</div>
        <div className={styles.skill}>
            <div className={styles.title}>スキル要約</div>
            <div className={styles.content}>
                <p>OS 　　　  　　：Linux, MacOS Big Sur 11.5.2</p>
                <p>言語　　　　　：JavaScript, TypeScript, PHP, SQL, HTML, CSS</p>
                <p>フレームワーク：React.js(16.8以降,Redux,React-Router), Next.js, Laravel, express, Vue.js, Nuxt.js, Jest,Node.js, Material-UI, Apollo, PHPUnit, Ajax, 
                    　　　　　　　　Axios, Vuetify, MaterializeCSS,GoogleAppsScript, Sass, TailwindCSS, vue-virtual-scroll-list, NextAuth</p>
              <p>ツール　　　　：Docker, AWS, nginx, mongoDB, MySQL, NoSQL(Firebase CloudFireStore), Git, VSCode, Redmine</p>
            </div>
        </div>
        <div className={styles.seisaku}>制作物</div>
        <div className={styles.itembox}>
            <div className={styles.item}>
                <img src="../image/Header.jpg" className={styles.phot}></img>
                <div className={styles.title}>アプリのタイトル</div>
                <div className={styles.detail}>アプリの簡単な説明</div>
            </div>
            <div className={styles.item}>
                <div className={styles.phot}>アプリの写真</div>
                <div className={styles.title}>アプリのタイトル</div>
                <div className={styles.detail}>アプリの簡単な説明</div>
            </div>
            <div className={styles.item}>
                <div className={styles.phot}>アプリの写真</div>
                <div className={styles.title}>アプリのタイトル</div>
                <div className={styles.detail}>アプリの簡単な説明</div>
            </div>
            <div className={styles.item}>
                <div className={styles.phot}>アプリの写真</div>
                <div className={styles.title}>アプリのタイトル</div>
                <div className={styles.detail}>アプリの簡単な説明</div>
            </div>
        </div>
    </div>
    )
}

export default practice
