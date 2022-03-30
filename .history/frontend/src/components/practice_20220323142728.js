import React from 'react'
import styles from "../styles/App.module.scss"; 

const practice = () => {
    return (
    <div className={styles.blackcontents}>
        <div className={styles.blacktitle}>PRACTICE</div>
        <div className={styles.skill}>
            <div>スキル要約</div>
            <div>
            OS 　　　  　　：Linux, MacOS Big Sur 11.5.2
言語　　　　　：JavaScript, TypeScript, PHP, SQL, HTML, CSS
フレームワーク：React.js(16.8以降,Redux,React-Router), Next.js, Laravel, express, Vue.js, Nuxt.js, Jest
　　　　　　　　Node.js, Material-UI, Apollo, PHPUnit, Ajax, Axios, Vuetify, MaterializeCSS,TailwindCSS,
　　　　　　　　GoogleAppsScript, Sass, TailwindCSS, vue-virtual-scroll-list, NextAuth
ツール               ：Docker, AWS, nginx, mongoDB, MySQL, NoSQL(Firebase CloudFireStore), Git, VSCode, Redmine
            </div>
        </div>
    </div>
    )
}

export default practice
