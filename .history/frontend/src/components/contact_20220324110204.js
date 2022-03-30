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
            <a href="https://github.com/Reiya-1003"><img src={Git} className={styles.item}></img></a>
            <a href="https://twitter.com/white_46_ega"><img src={twitter} className={styles.item}></img></a>
            <a href="https://www.instagram.com/re_ru_official/"><img src={insta} className={styles.item}></img></a>

        </div>
        <div className={styles.address}>reiya.nico66@gmail.com</div>
        
    </div>
    )
}

export default contact
