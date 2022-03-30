import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import myPhot from '../image/MyIcon.jpeg'
import { useInView } from 'react-intersection-observer';
import styles from "../styles/App.module.scss";

const About = () => {
const {ref,inView} = useInView({
    rootMargin: '-200px', // ref要素が現れてから200px過ぎたら
    triggerOnce:true,  // 最初の一度だけ実行
})


    return (
    //  refを与えた要素がウインドウ内に現れるとinViewがtrueになります 
        <div className={styles.whitecontents} ref={ref}>
            {inView && (
                <div className={styles.whitetitle} >ABOUT</div>
            )}
            
            <div className={styles.contena}>

                 <img src={myPhot} className={styles.myPhot}></img>
                 <div className={styles.keireki}>
                    <div className={styles.top}>経歴</div>
                    <div className={styles.second}>
                        <p className={styles.third}>2020年4月〜2021年5月</p>　<br></br>
                        <p className={styles.third}>総合リース会社にて営業として従事</p>
                    </div>
                    <div className={styles.second}>
                        <p className={styles.third}>2021年7月〜現在</p><br></br>
                        <p className={styles.third}>ラクスパートナーズ株式会社にてフロントエンドとして転職</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default About
