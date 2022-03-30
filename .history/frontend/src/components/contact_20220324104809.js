import React from 'react'
import styles from "../styles/App.module.scss";
import Git from '../image/github.png'
import twitter from '../image/twitter.jpeg'
import insta from '../image/insta.jpeg'

const contact = () => {
    return (
        <div className={styles.whitecontents}>
        <div className={styles.whitetitle}>CONTACT</div>
        <div className={styles.itembox}>
            <img src={Git}></img>
            <img src={twitter}></img>
            <img src={insta}></img>

        </div>
        
    </div>
    )
}

export default contact
