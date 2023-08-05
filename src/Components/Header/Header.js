import React from 'react';
import styles from './Header.module.css'
import Navigation from '../Navigation/Navigation'
const Header = () => {
    return(
        <header>
            <div className={styles.logo}>
                LOGO
            </div>
            <Navigation />
        </header>
    );
}

export default Header