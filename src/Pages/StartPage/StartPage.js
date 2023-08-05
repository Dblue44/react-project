import React from 'react';
import styles from './StartPage.module.css';
console.log(styles)
const StartPage = () => {
    return(
        <div className={styles.StartPage}>
            <div className={styles.center}>
                <button className={styles.floatingButton}>PRESS ME</button>
            </div>
        </div>
    );
}

export default StartPage;