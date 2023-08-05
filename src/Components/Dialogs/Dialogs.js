import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem";


const Dialogs = (props) => {
    let DialogItems = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    return (
        <div className={styles.DialogsList}>
            {DialogItems}
        </div>
    );
}

export default Dialogs;