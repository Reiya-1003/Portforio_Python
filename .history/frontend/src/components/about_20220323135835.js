import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import myPhot from '../image/Myphot.jpeg'

import styles from "../styles/App.module.scss";

const about = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.title}>ABOUT</div>
            <div className={styles.contena}>

                 <img src={myPhot} className={styles.myPhot}></img>
                 <div className={styles.keireki}>
                    <div className={styles.top}>経歴</div>
                    <div className={styles.second}>2020年4月〜2021年5月　総合リース会社にて営業として従事</div>
                    <div className={styles.second}>2021年7月〜現在　　　　 ラクスパートナーズ株式会社にてフロントエンドとして転職</div>
                 </div>
            </div>
        </div>
    )
}

export default about
