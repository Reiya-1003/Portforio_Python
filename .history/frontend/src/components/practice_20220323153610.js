import React from 'react'
import styles from "../styles/App.module.scss"; 

const practice = () => {
    return (
    <div className={styles.blackcontents}>
        <div className={styles.blacktitle}>PRACTICE</div>
        <div className={styles.skill}>
            <div>スキル要約</div>
            <div>
                <p>OS 　　　  　　：Linux, MacOS Big Sur 11.5.2</p>
                <p>言語　　　　　：JavaScript, TypeScript, PHP, SQL, HTML, CSS</p>
            </div>
        </div>
    </div>
    )
}

export default practice
