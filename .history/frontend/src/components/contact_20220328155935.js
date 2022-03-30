import React from 'react'
import styles from "../styles/App.module.scss";
import Git from '../image/github.png'
import twitter from '../image/twitter.jpeg'
import insta from '../image/insta.jpeg'
import { useInView } from 'react-intersection-observer';

const Contact = () => {

    const {ref,inView} = useInView({
        rootMargin: '-200px', // ref要素が現れてから200px過ぎたら
        triggerOnce:true,  // 最初の一度だけ実行
    })

    return (
        <div className={styles.whitecontents} ref={ref} id="contact">
            {inView &&(        
            <div className={styles.whitetitle} >CONTACT</div>
            )}
        <div className={styles.itembox}>
            <a href="https://twitter.com/white_46_ega"><img src={twitter} className={styles.item}></img></a>
            <a href="https://github.com/Reiya-1003"><img src={Git} className={styles.item}></img></a>
            <a href="https://www.instagram.com/re_ru_official/"><img src={insta} className={styles.item}></img></a>

        </div>
        <a href="mailto:info@reiya.nico66@gmail.com"><div className={styles.address}>reiya.nico66@gmail.com</div></a>
        
    </div>
    )
}

export default Contact
