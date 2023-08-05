import React from 'react';
import styles from './Dialogs.module.css';
import UserIco from "../../Assest/Images/UserIco.png"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.DialogItem} key={props.id}>
            <img src={UserIco} alt="UserIco"/>
            <NavLink to={"/Chats/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;