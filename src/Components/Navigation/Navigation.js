import React from 'react';
import styles from './Navigation.module.css';
import NavigationItem from "./NavigationItem";

const Navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <NavigationItem name="About" link="/About"/>
            <NavigationItem name="Chats" link="/Chats"/>
        </div>
    );
}

export default Navigation;