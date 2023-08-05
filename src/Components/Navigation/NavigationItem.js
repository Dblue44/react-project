import React from 'react';
import styles from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    let name = props.name;
    let link = props.link;
    return (
        <div className={styles.navItem}>
            <NavLink to={link} className={
                ({ isActive }) =>
                isActive ? styles.Active : undefined
            } >{name}</NavLink>
        </div>
    );
}

export default NavigationItem;