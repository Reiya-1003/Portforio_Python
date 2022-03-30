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
            <div className={styles.keireki}></div>
            </div>
        </div>
    )
}

export default about
