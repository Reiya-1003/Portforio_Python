import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import myPhot from '../image/Myphot.jpeg'
import { useInView } from 'react-intersection-observer';
import styles from "../styles/App.module.scss";

const About = () => {
const {ref,inView} = useInView({
    rootMargin: '-200px',
    triggerOnce:true,
})


    return (
        <div className={styles.whitecontents} ref={ref}>
            {inView && (
                <div className={styles.whitetitle} >ABOUT</div>
            )}
            
            <div className={styles.contena}>

                 <img src={myPhot} className={styles.myPhot}></img>
                 <div className={styles.keireki}>
                    <div className={styles.top}>経歴</div>
                    <div className={styles.second}>2020年4月〜2021年5月　総合リース会社にて営業として従事</div>
                    <div className={styles.second}>2021年7月〜現在　　　　 ラクスパートナーズ株式会社にてフ
                    　　　　　　　　ロントエンドとして転職</div>
                 </div>
            </div>
        </div>
    )
}

export default About
