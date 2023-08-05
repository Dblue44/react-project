import React from 'react';
import styles from './Footer.module.css';
import GitLogo from '../../Assest/Images/GitHub.jpg';

const Footer = () => {
    return(
        <footer>
            <div className={styles.content}>
                <a href="https://github.com/Dblue44/react-app"><img src={GitLogo} alt="GitHub"/></a>
            </div>
        </footer>
    );
}

export default Footer;