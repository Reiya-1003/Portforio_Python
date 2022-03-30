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
            <img src={Git} className={styles.item}></img>
            <img src={twitter} className={styles.item}></img>
            <img src={insta} className={styles.item}></img>

        </div>
        <div>reiya.nico66@gmail.com</div>
        
    </div>
    )
}

export default contact
