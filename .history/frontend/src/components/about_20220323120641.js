import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import myPhot from '../image/Myphot.jpeg'

import styles from "../styles/App.module.scss";

const about = () => {
    return (
        <div className={styles.contents}>
            <div className={styles.title}>ABOUT</div>
            <img src={myPhot}></img>
        </div>
    )
}

export default about
